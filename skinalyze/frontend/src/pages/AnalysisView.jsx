// import { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { Camera, Upload, Loader2 } from 'lucide-react';
// import toast from 'react-hot-toast';
// import ImageCapture from '../components/analysis/ImageCapture';
// import AIAnalysisResults from '../components/analysis/AIAnalysisResults';
// import { analyzeImage } from '../services/api';

// export default function AnalysisView() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [image, setImage] = useState(null);
//   const [analysisResults, setAnalysisResults] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   const handleImageCapture = async (capturedImage) => {
//     setImage(capturedImage);
//     setIsAnalyzing(true);

//     try {
//       const formData = new FormData();
//       formData.append('image', capturedImage);
//       formData.append('patient_id', id);

//       const results = await analyzeImage(formData);
//       setAnalysisResults(results);
//       toast.success('Analysis completed successfully');
//     } catch (error) {
//       toast.error('Analysis failed: ' + error.message);
//     } finally {
//       setIsAnalyzing(false);
//     }
//   };

//   const handleSaveVisit = async () => {
//     try {
//       // Save visit with analysis results
//       toast.success('Visit saved successfully');
//       navigate(`/patients/${id}`);
//     } catch (error) {
//       toast.error('Failed to save visit');
//     }
//   };

//   return (
//     <div className="max-w-7xl mx-auto space-y-6">
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Analysis</h1>
//           <p className="text-gray-600 mt-1">Capture and analyze skin condition</p>
//         </div>
//         {analysisResults && (
//           <button
//             onClick={handleSaveVisit}
//             className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
//           >
//             Save Visit
//           </button>
//         )}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Image Capture</h2>
//           <ImageCapture onCapture={handleImageCapture} />
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis Results</h2>
//           {isAnalyzing ? (
//             <div className="flex items-center justify-center h-64">
//               <div className="text-center">
//                 <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto" />
//                 <p className="text-gray-600 mt-4">Analyzing image...</p>
//                 <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
//               </div>
//             </div>
//           ) : analysisResults ? (
//             <AIAnalysisResults results={analysisResults} />
//           ) : (
//             <div className="flex items-center justify-center h-64 text-gray-500">
//               <p>Capture an image to begin analysis</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Camera, Upload, Loader2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import ClassificationCard from '../components/analysis/ClassificationCard';
import RiskBandIndicator from '../components/analysis/RiskBandIndicator';

export default function AnalysisView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = async () => {
    if (!image) {
      toast.error('Please upload an image first');
      return;
    }

    setIsAnalyzing(true);

    // Simulate API call with mock data
    setTimeout(() => {
      setAnalysisResults({
        predictions: [
          { condition: 'Atopic Dermatitis (Eczema)', category: 'Inflammatory', confidence: 0.87 },
          { condition: 'Contact Dermatitis', category: 'Inflammatory', confidence: 0.76 },
          { condition: 'Psoriasis', category: 'Autoimmune', confidence: 0.65 },
        ],
        riskBand: 'medium',
        inferenceTime: 245,
      });
      setIsAnalyzing(false);
      toast.success('Analysis completed successfully');
    }, 2000);
  };

  const handleSaveVisit = () => {
    toast.success('Visit saved successfully');
    navigate(`/patients/${id}`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link to={`/patients/${id}`} className="p-2 hover:bg-gray-100 rounded-lg">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Analysis</h1>
          <p className="text-gray-600 mt-1">Capture and analyze skin condition</p>
        </div>
        {analysisResults && (
          <button onClick={handleSaveVisit} className="btn-primary">
            Save Visit
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Image Upload Section */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Image Capture</h2>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
            {imagePreview ? (
              <div className="space-y-4">
                <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
                <div className="flex gap-3">
                  <label className="btn-secondary flex-1 text-center cursor-pointer">
                    <Upload className="w-5 h-5 inline mr-2" />
                    Change Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
                  </label>
                  <button onClick={handleAnalyze} disabled={isAnalyzing} className="btn-primary flex-1">
                    {isAnalyzing ? (
                      <>
                        <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      'Analyze Image'
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <label className="cursor-pointer block text-center">
                <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Click to upload an image</p>
                <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>

          {analysisResults && (
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Inference Time:</strong> {analysisResults.inferenceTime}ms
              </p>
            </div>
          )}
        </div>

        {/* Analysis Results Section */}
        <div className="card">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis Results</h2>
          
          {isAnalyzing ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto" />
                <p className="text-gray-600 mt-4">Analyzing image...</p>
                <p className="text-sm text-gray-500 mt-2">Processing with AI classifier</p>
              </div>
            </div>
          ) : analysisResults ? (
            <div className="space-y-6">
              <RiskBandIndicator risk={analysisResults.riskBand} />

              <div className="space-y-3">
                <h3 className="font-semibold text-gray-900">Top Predictions</h3>
                {analysisResults.predictions.map((prediction, index) => (
                  <ClassificationCard
                    key={index}
                    rank={index + 1}
                    condition={prediction.condition}
                    confidence={prediction.confidence}
                    category={prediction.category}
                  />
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm font-medium text-yellow-800 mb-1">
                  AI-Assisted Advisory Tool
                </p>
                <p className="text-sm text-yellow-700">
                  These results are suggestions only. Clinical diagnosis and treatment 
                  decisions must be made by qualified healthcare professionals based on 
                  comprehensive patient assessment.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 text-gray-500">
              <div className="text-center">
                <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>Upload an image to begin analysis</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
