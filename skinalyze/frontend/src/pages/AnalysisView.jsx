// // // import { useState } from 'react';
// // // import { useParams, useNavigate } from 'react-router-dom';
// // // import { Camera, Upload, Loader2 } from 'lucide-react';
// // // import toast from 'react-hot-toast';
// // // import ImageCapture from '../components/analysis/ImageCapture';
// // // import AIAnalysisResults from '../components/analysis/AIAnalysisResults';
// // // import { analyzeImage } from '../services/api';

// // // export default function AnalysisView() {
// // //   const { id } = useParams();
// // //   const navigate = useNavigate();
// // //   const [image, setImage] = useState(null);
// // //   const [analysisResults, setAnalysisResults] = useState(null);
// // //   const [isAnalyzing, setIsAnalyzing] = useState(false);

// // //   const handleImageCapture = async (capturedImage) => {
// // //     setImage(capturedImage);
// // //     setIsAnalyzing(true);

// // //     try {
// // //       const formData = new FormData();
// // //       formData.append('image', capturedImage);
// // //       formData.append('patient_id', id);

// // //       const results = await analyzeImage(formData);
// // //       setAnalysisResults(results);
// // //       toast.success('Analysis completed successfully');
// // //     } catch (error) {
// // //       toast.error('Analysis failed: ' + error.message);
// // //     } finally {
// // //       setIsAnalyzing(false);
// // //     }
// // //   };

// // //   const handleSaveVisit = async () => {
// // //     try {
// // //       // Save visit with analysis results
// // //       toast.success('Visit saved successfully');
// // //       navigate(`/patients/${id}`);
// // //     } catch (error) {
// // //       toast.error('Failed to save visit');
// // //     }
// // //   };

// // //   return (
// // //     <div className="max-w-7xl mx-auto space-y-6">
// // //       <div className="flex items-center justify-between">
// // //         <div>
// // //           <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Analysis</h1>
// // //           <p className="text-gray-600 mt-1">Capture and analyze skin condition</p>
// // //         </div>
// // //         {analysisResults && (
// // //           <button
// // //             onClick={handleSaveVisit}
// // //             className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
// // //           >
// // //             Save Visit
// // //           </button>
// // //         )}
// // //       </div>

// // //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
// // //           <h2 className="text-lg font-semibold text-gray-900 mb-4">Image Capture</h2>
// // //           <ImageCapture onCapture={handleImageCapture} />
// // //         </div>

// // //         <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
// // //           <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis Results</h2>
// // //           {isAnalyzing ? (
// // //             <div className="flex items-center justify-center h-64">
// // //               <div className="text-center">
// // //                 <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto" />
// // //                 <p className="text-gray-600 mt-4">Analyzing image...</p>
// // //                 <p className="text-sm text-gray-500 mt-2">This may take a few seconds</p>
// // //               </div>
// // //             </div>
// // //           ) : analysisResults ? (
// // //             <AIAnalysisResults results={analysisResults} />
// // //           ) : (
// // //             <div className="flex items-center justify-center h-64 text-gray-500">
// // //               <p>Capture an image to begin analysis</p>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // }
// // import { useState } from 'react';
// // import { useParams, useNavigate } from 'react-router-dom';
// // import { Camera, Upload, Loader2, ArrowLeft } from 'lucide-react';
// // import { Link } from 'react-router-dom';
// // import toast from 'react-hot-toast';
// // import ClassificationCard from '../components/analysis/ClassificationCard';
// // import RiskBandIndicator from '../components/analysis/RiskBandIndicator';

// // export default function AnalysisView() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const [image, setImage] = useState(null);
// //   const [imagePreview, setImagePreview] = useState(null);
// //   const [analysisResults, setAnalysisResults] = useState(null);
// //   const [isAnalyzing, setIsAnalyzing] = useState(false);

// //   const handleImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImage(file);
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setImagePreview(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleAnalyze = async () => {
// //     if (!image) {
// //       toast.error('Please upload an image first');
// //       return;
// //     }

// //     setIsAnalyzing(true);

// //     // Simulate API call with mock data
// //     setTimeout(() => {
// //       setAnalysisResults({
// //         predictions: [
// //           { condition: 'Atopic Dermatitis (Eczema)', category: 'Inflammatory', confidence: 0.87 },
// //           { condition: 'Contact Dermatitis', category: 'Inflammatory', confidence: 0.76 },
// //           { condition: 'Psoriasis', category: 'Autoimmune', confidence: 0.65 },
// //         ],
// //         riskBand: 'medium',
// //         inferenceTime: 245,
// //       });
// //       setIsAnalyzing(false);
// //       toast.success('Analysis completed successfully');
// //     }, 2000);
// //   };

// //   const handleSaveVisit = () => {
// //     toast.success('Visit saved successfully');
// //     navigate(`/patients/${id}`);
// //   };

// //   return (
// //     <div className="max-w-7xl mx-auto space-y-6">
// //       <div className="flex items-center gap-4">
// //         <Link to={`/patients/${id}`} className="p-2 hover:bg-gray-100 rounded-lg">
// //           <ArrowLeft className="w-5 h-5" />
// //         </Link>
// //         <div className="flex-1">
// //           <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Analysis</h1>
// //           <p className="text-gray-600 mt-1">Capture and analyze skin condition</p>
// //         </div>
// //         {analysisResults && (
// //           <button onClick={handleSaveVisit} className="btn-primary">
// //             Save Visit
// //           </button>
// //         )}
// //       </div>

// //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// //         {/* Image Upload Section */}
// //         <div className="card">
// //           <h2 className="text-lg font-semibold text-gray-900 mb-4">Image Capture</h2>
          
// //           <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
// //             {imagePreview ? (
// //               <div className="space-y-4">
// //                 <img src={imagePreview} alt="Preview" className="w-full h-64 object-cover rounded-lg" />
// //                 <div className="flex gap-3">
// //                   <label className="btn-secondary flex-1 text-center cursor-pointer">
// //                     <Upload className="w-5 h-5 inline mr-2" />
// //                     Change Image
// //                     <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
// //                   </label>
// //                   <button onClick={handleAnalyze} disabled={isAnalyzing} className="btn-primary flex-1">
// //                     {isAnalyzing ? (
// //                       <>
// //                         <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
// //                         Analyzing...
// //                       </>
// //                     ) : (
// //                       'Analyze Image'
// //                     )}
// //                   </button>
// //                 </div>
// //               </div>
// //             ) : (
// //               <label className="cursor-pointer block text-center">
// //                 <Camera className="w-16 h-16 mx-auto text-gray-400 mb-4" />
// //                 <p className="text-gray-600 mb-2">Click to upload an image</p>
// //                 <p className="text-sm text-gray-500">PNG, JPG up to 10MB</p>
// //                 <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
// //               </label>
// //             )}
// //           </div>

// //           {analysisResults && (
// //             <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
// //               <p className="text-sm text-blue-800">
// //                 <strong>Inference Time:</strong> {analysisResults.inferenceTime}ms
// //               </p>
// //             </div>
// //           )}
// //         </div>

// //         {/* Analysis Results Section */}
// //         <div className="card">
// //           <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis Results</h2>
          
// //           {isAnalyzing ? (
// //             <div className="flex items-center justify-center h-64">
// //               <div className="text-center">
// //                 <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto" />
// //                 <p className="text-gray-600 mt-4">Analyzing image...</p>
// //                 <p className="text-sm text-gray-500 mt-2">Processing with AI classifier</p>
// //               </div>
// //             </div>
// //           ) : analysisResults ? (
// //             <div className="space-y-6">
// //               <RiskBandIndicator risk={analysisResults.riskBand} />

// //               <div className="space-y-3">
// //                 <h3 className="font-semibold text-gray-900">Top Predictions</h3>
// //                 {analysisResults.predictions.map((prediction, index) => (
// //                   <ClassificationCard
// //                     key={index}
// //                     rank={index + 1}
// //                     condition={prediction.condition}
// //                     confidence={prediction.confidence}
// //                     category={prediction.category}
// //                   />
// //                 ))}
// //               </div>

// //               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
// //                 <p className="text-sm font-medium text-yellow-800 mb-1">
// //                   AI-Assisted Advisory Tool
// //                 </p>
// //                 <p className="text-sm text-yellow-700">
// //                   These results are suggestions only. Clinical diagnosis and treatment 
// //                   decisions must be made by qualified healthcare professionals based on 
// //                   comprehensive patient assessment.
// //                 </p>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="flex items-center justify-center h-64 text-gray-500">
// //               <div className="text-center">
// //                 <Activity className="w-12 h-12 mx-auto mb-3 opacity-50" />
// //                 <p>Upload an image to begin analysis</p>
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
// import { useState } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';
// import { Camera, Upload, Loader2, ArrowLeft, CheckCircle, AlertTriangle, AlertCircle, X } from 'lucide-react';
// import toast from 'react-hot-toast';

// export default function AnalysisView() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [image, setImage] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [analysisResults, setAnalysisResults] = useState(null);
//   const [isAnalyzing, setIsAnalyzing] = useState(false);

//   const handleImageUpload = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setImagePreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//       toast.success('Image uploaded successfully');
//     }
//   };

//   const clearImage = () => {
//     setImage(null);
//     setImagePreview(null);
//     setAnalysisResults(null);
//   };

//   const handleAnalyze = async () => {
//     if (!image) {
//       toast.error('Please upload an image first');
//       return;
//     }

//     setIsAnalyzing(true);

//     // Simulate API call with mock data
//     setTimeout(() => {
//       setAnalysisResults({
//         predictions: [
//           { 
//             condition: 'Atopic Dermatitis (Eczema)', 
//             category: 'Inflammatory', 
//             confidence: 0.87,
//             description: 'Chronic inflammatory skin condition'
//           },
//           { 
//             condition: 'Contact Dermatitis', 
//             category: 'Inflammatory', 
//             confidence: 0.76,
//             description: 'Allergic or irritant reaction'
//           },
//           { 
//             condition: 'Psoriasis', 
//             category: 'Autoimmune', 
//             confidence: 0.65,
//             description: 'Autoimmune skin disorder'
//           },
//         ],
//         riskBand: 'medium',
//         inferenceTime: 245,
//         explainability: true,
//       });
//       setIsAnalyzing(false);
//       toast.success('Analysis completed successfully');
//     }, 2000);
//   };

//   const handleSaveVisit = () => {
//     toast.success('Visit saved successfully');
//     navigate(`/patients/${id}`);
//   };

//   return (
//     <div className="max-w-7xl mx-auto space-y-6">
//       {/* Header */}
//       <div className="flex items-center gap-4">
//         <Link to={`/patients/${id}`} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
//           <ArrowLeft className="w-5 h-5" />
//         </Link>
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold text-gray-900">AI-Assisted Analysis</h1>
//           <p className="text-gray-600 mt-1">Capture and analyze skin condition</p>
//         </div>
//         {analysisResults && (
//           <button onClick={handleSaveVisit} className="btn-primary">
//             Save Visit
//           </button>
//         )}
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Image Upload Section */}
//         <div className="card">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">Image Capture</h2>
          
//           {imagePreview ? (
//             <div className="space-y-4">
//               <div className="relative">
//                 <img 
//                   src={imagePreview} 
//                   alt="Preview" 
//                   className="w-full h-80 object-cover rounded-lg border-2 border-gray-200" 
//                 />
//                 <button
//                   onClick={clearImage}
//                   className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
//                 >
//                   <X className="w-4 h-4" />
//                 </button>
//               </div>
              
//               <div className="flex gap-3">
//                 <label className="btn-secondary flex-1 text-center cursor-pointer">
//                   <Upload className="w-5 h-5 inline mr-2" />
//                   Change Image
//                   <input 
//                     type="file" 
//                     accept="image/*" 
//                     onChange={handleImageUpload} 
//                     className="hidden" 
//                   />
//                 </label>
//                 <button 
//                   onClick={handleAnalyze} 
//                   disabled={isAnalyzing} 
//                   className={`btn-primary flex-1 ${isAnalyzing ? 'opacity-75 cursor-not-allowed' : ''}`}
//                 >
//                   {isAnalyzing ? (
//                     <>
//                       <Loader2 className="w-5 h-5 inline mr-2 animate-spin" />
//                       Analyzing...
//                     </>
//                   ) : (
//                     <>
//                       <Camera className="w-5 h-5 inline mr-2" />
//                       Analyze Image
//                     </>
//                   )}
//                 </button>
//               </div>

//               {analysisResults && (
//                 <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
//                   <div className="flex items-center justify-between text-sm">
//                     <span className="text-blue-800">
//                       <strong>Inference Time:</strong> {analysisResults.inferenceTime}ms
//                     </span>
//                     <span className="text-blue-600 font-medium">✓ Analysis Complete</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-primary-400 transition-colors">
//               <label className="cursor-pointer block">
//                 <Camera className="w-20 h-20 mx-auto text-gray-400 mb-4" />
//                 <p className="text-gray-600 mb-2 font-medium">Click to upload a skin image</p>
//                 <p className="text-sm text-gray-500 mb-4">PNG, JPG, JPEG up to 10MB</p>
//                 <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
//                   <Upload className="w-5 h-5" />
//                   Choose Image
//                 </div>
//                 <input 
//                   type="file" 
//                   accept="image/*" 
//                   onChange={handleImageUpload} 
//                   className="hidden" 
//                 />
//               </label>
//             </div>
//           )}
//         </div>

//         {/* Analysis Results Section */}
//         <div className="card">
//           <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Analysis Results</h2>
          
//           {isAnalyzing ? (
//             <div className="flex items-center justify-center h-96">
//               <div className="text-center">
//                 <Loader2 className="w-16 h-16 text-primary-600 animate-spin mx-auto" />
//                 <p className="text-gray-600 mt-4 font-medium">Analyzing image...</p>
//                 <p className="text-sm text-gray-500 mt-2">Processing with AI classifier</p>
//                 <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
//                   <div className="w-2 h-2 bg-primary-600 rounded-full animate-pulse"></div>
//                   <span>Running inference on 537 conditions</span>
//                 </div>
//               </div>
//             </div>
//           ) : analysisResults ? (
//             <div className="space-y-6">
//               {/* Risk Band Indicator */}
//               <RiskBandIndicator risk={analysisResults.riskBand} />

//               {/* Top Predictions */}
//               <div className="space-y-3">
//                 <h3 className="font-semibold text-gray-900">Top 3 Predictions</h3>
//                 {analysisResults.predictions.map((prediction, index) => (
//                   <ClassificationCard
//                     key={index}
//                     rank={index + 1}
//                     condition={prediction.condition}
//                     confidence={prediction.confidence}
//                     category={prediction.category}
//                     description={prediction.description}
//                   />
//                 ))}
//               </div>

//               {/* Explainability */}
//               {analysisResults.explainability && (
//                 <div className="space-y-2">
//                   <h3 className="font-semibold text-gray-900">Explainability</h3>
//                   <div className="bg-gradient-to-br from-red-100 via-yellow-100 to-green-100 rounded-lg p-8 text-center">
//                     <p className="text-sm text-gray-600">Heatmap showing influential regions</p>
//                   </div>
//                   <p className="text-xs text-gray-500">
//                     Highlighted regions show areas that influenced the AI's assessment
//                   </p>
//                 </div>
//               )}

//               {/* Disclaimer */}
//               <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
//                 <div className="flex gap-3">
//                   <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
//                   <div>
//                     <p className="text-sm font-medium text-yellow-800">
//                       AI-Assisted Advisory Tool
//                     </p>
//                     <p className="text-sm text-yellow-700 mt-1">
//                       These results are suggestions only. Clinical diagnosis and treatment 
//                       decisions must be made by qualified healthcare professionals based on 
//                       comprehensive patient assessment.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex items-center justify-center h-96 text-gray-500">
//               <div className="text-center">
//                 <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
//                 <p className="font-medium">No analysis yet</p>
//                 <p className="text-sm mt-2">Upload an image to begin AI analysis</p>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // Inline Components (no external dependencies)

// function RiskBandIndicator({ risk }) {
//   const riskConfig = {
//     low: {
//       color: 'bg-green-100 text-green-800 border-green-300',
//       icon: CheckCircle,
//       label: 'Low Risk',
//       message: 'Condition appears manageable with standard care',
//     },
//     medium: {
//       color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
//       icon: AlertCircle,
//       label: 'Medium Risk',
//       message: 'Requires monitoring and potential intervention',
//     },
//     high: {
//       color: 'bg-red-100 text-red-800 border-red-300',
//       icon: AlertTriangle,
//       label: 'High Risk',
//       message: 'Immediate attention recommended - possible serious condition',
//     },
//   };

//   const config = riskConfig[risk] || riskConfig.medium;
//   const Icon = config.icon;

//   return (
//     <div className={`border-2 rounded-lg p-4 ${config.color}`}>
//       <div className="flex items-center gap-3">
//         <Icon className="w-6 h-6 flex-shrink-0" />
//         <div className="flex-1">
//           <h3 className="font-semibold">{config.label}</h3>
//           <p className="text-sm mt-1">{config.message}</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// function ClassificationCard({ rank, condition, confidence, category, description }) {
//   const confidencePercent = (confidence * 100).toFixed(1);
  
//   const rankColors = {
//     1: 'border-primary-500 bg-primary-50',
//     2: 'border-gray-300 bg-gray-50',
//     3: 'border-gray-200 bg-white',
//   };

//   return (
//     <div className={`border-2 ${rankColors[rank]} rounded-lg p-4 transition-all hover:shadow-md`}>
//       <div className="flex items-start justify-between mb-2">
//         <div className="flex-1">
//           <div className="flex items-center gap-2 mb-1">
//             {rank === 1 && <CheckCircle className="w-5 h-5 text-primary-600" />}
//             <span className="text-xs font-medium text-gray-500">Rank #{rank}</span>
//           </div>
//           <h4 className="font-semibold text-gray-900">{condition}</h4>
//           <p className="text-sm text-gray-600">{category}</p>
//           {description && (
//             <p className="text-xs text-gray-500 mt-1">{description}</p>
//           )}
//         </div>
//         <div className="text-right ml-4">
//           <div className="text-2xl font-bold text-gray-900">{confidencePercent}%</div>
//           <div className="text-xs text-gray-500">confidence</div>
//         </div>
//       </div>
      
//       <div className="mt-3">
//         <div className="w-full bg-gray-200 rounded-full h-2.5">
//           <div 
//             className={`h-2.5 rounded-full transition-all duration-500 ${rank === 1 ? 'bg-primary-600' : 'bg-gray-400'}`}
//             style={{ width: `${confidencePercent}%` }}
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Camera, Upload, Loader2, ArrowLeft, CheckCircle, AlertTriangle, AlertCircle, X } from 'lucide-react';
import toast from 'react-hot-toast';

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
      toast.success('Image uploaded successfully');
    }
  };

  const clearImage = () => {
    setImage(null);
    setImagePreview(null);
    setAnalysisResults(null);
  };

  const handleAnalyze = async () => {
    if (!image) {
      toast.error('Please upload an image first');
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      setAnalysisResults({
        predictions: [
          { 
            condition: 'Atopic Dermatitis (Eczema)', 
            category: 'Inflammatory', 
            confidence: 0.87,
            description: 'Chronic inflammatory skin condition'
          },
          { 
            condition: 'Contact Dermatitis', 
            category: 'Inflammatory', 
            confidence: 0.76,
            description: 'Allergic or irritant reaction'
          },
          { 
            condition: 'Psoriasis', 
            category: 'Autoimmune', 
            confidence: 0.65,
            description: 'Autoimmune skin disorder'
          },
        ],
        riskBand: 'medium',
        inferenceTime: 245,
        explainability: true,
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
    <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 sm:gap-4">
        <Link to={`/patients/${id}`} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1 min-w-0">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 truncate">AI-Assisted Analysis</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1 hidden sm:block">Capture and analyze skin condition</p>
        </div>
        {analysisResults && (
          <button onClick={handleSaveVisit} className="btn-primary text-sm sm:text-base px-3 sm:px-4 py-2 whitespace-nowrap">
            Save
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Image Upload Section */}
        <div className="card p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">Image Capture</h2>
          
          {imagePreview ? (
            <div className="space-y-3 sm:space-y-4">
              <div className="relative">
                <img 
                  src={imagePreview} 
                  alt="Preview" 
                  className="w-full h-64 sm:h-80 object-cover rounded-lg border-2 border-gray-200" 
                />
                <button
                  onClick={clearImage}
                  className="absolute top-2 right-2 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors shadow-lg"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                <label className="btn-secondary flex-1 text-center cursor-pointer text-sm sm:text-base py-2 sm:py-3">
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                  Change
                  <input 
                    type="file" 
                    accept="image/*" 
                    onChange={handleImageUpload} 
                    className="hidden" 
                  />
                </label>
                <button 
                  onClick={handleAnalyze} 
                  disabled={isAnalyzing} 
                  className={`btn-primary flex-1 text-sm sm:text-base py-2 sm:py-3 ${isAnalyzing ? 'opacity-75 cursor-not-allowed' : ''}`}
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Camera className="w-4 h-4 sm:w-5 sm:h-5 inline mr-2" />
                      Analyze
                    </>
                  )}
                </button>
              </div>

              {analysisResults && (
                <div className="p-3 sm:p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs sm:text-sm">
                    <span className="text-blue-800">
                      <strong>Inference:</strong> {analysisResults.inferenceTime}ms
                    </span>
                    <span className="text-blue-600 font-medium">✓ Complete</span>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 sm:p-12 text-center hover:border-primary-400 transition-colors">
              <label className="cursor-pointer block">
                <Camera className="w-16 h-16 sm:w-20 sm:h-20 mx-auto text-gray-400 mb-3 sm:mb-4" />
                <p className="text-sm sm:text-base text-gray-600 mb-1 sm:mb-2 font-medium">Tap to upload image</p>
                <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4">PNG, JPG up to 10MB</p>
                <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm sm:text-base">
                  <Upload className="w-4 h-4 sm:w-5 sm:h-5" />
                  Choose Image
                </div>
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageUpload} 
                  className="hidden" 
                />
              </label>
            </div>
          )}
        </div>

        {/* Analysis Results Section */}
        <div className="card p-4 sm:p-6">
          <h2 className="text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4">AI Results</h2>
          
          {isAnalyzing ? (
            <div className="flex items-center justify-center h-64 sm:h-96">
              <div className="text-center">
                <Loader2 className="w-12 h-12 sm:w-16 sm:h-16 text-primary-600 animate-spin mx-auto" />
                <p className="text-sm sm:text-base text-gray-600 mt-3 sm:mt-4 font-medium">Analyzing...</p>
                <p className="text-xs sm:text-sm text-gray-500 mt-2">Processing with AI</p>
              </div>
            </div>
          ) : analysisResults ? (
            <div className="space-y-4 sm:space-y-6">
              <RiskBandIndicator risk={analysisResults.riskBand} />

              <div className="space-y-2 sm:space-y-3">
                <h3 className="text-sm sm:text-base font-semibold text-gray-900">Top Predictions</h3>
                {analysisResults.predictions.map((prediction, index) => (
                  <ClassificationCard
                    key={index}
                    rank={index + 1}
                    condition={prediction.condition}
                    confidence={prediction.confidence}
                    category={prediction.category}
                    description={prediction.description}
                  />
                ))}
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 sm:p-4">
                <div className="flex gap-2 sm:gap-3">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs sm:text-sm font-medium text-yellow-800">
                      AI Advisory Tool
                    </p>
                    <p className="text-xs sm:text-sm text-yellow-700 mt-1">
                      Results are suggestions. Clinician makes final diagnosis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 sm:h-96 text-gray-500">
              <div className="text-center">
                <Camera className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 opacity-50" />
                <p className="text-sm sm:text-base font-medium">No analysis yet</p>
                <p className="text-xs sm:text-sm mt-2">Upload image to begin</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function RiskBandIndicator({ risk }) {
  const riskConfig = {
    low: {
      color: 'bg-green-100 text-green-800 border-green-300',
      icon: CheckCircle,
      label: 'Low Risk',
      message: 'Manageable with standard care',
    },
    medium: {
      color: 'bg-yellow-100 text-yellow-800 border-yellow-300',
      icon: AlertCircle,
      label: 'Medium Risk',
      message: 'Requires monitoring',
    },
    high: {
      color: 'bg-red-100 text-red-800 border-red-300',
      icon: AlertTriangle,
      label: 'High Risk',
      message: 'Immediate attention needed',
    },
  };

  const config = riskConfig[risk] || riskConfig.medium;
  const Icon = config.icon;

  return (
    <div className={`border-2 rounded-lg p-3 sm:p-4 ${config.color}`}>
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base font-semibold">{config.label}</h3>
          <p className="text-xs sm:text-sm mt-1">{config.message}</p>
        </div>
      </div>
    </div>
  );
}

function ClassificationCard({ rank, condition, confidence, category, description }) {
  const confidencePercent = (confidence * 100).toFixed(1);
  
  const rankColors = {
    1: 'border-primary-500 bg-primary-50',
    2: 'border-gray-300 bg-gray-50',
    3: 'border-gray-200 bg-white',
  };

  return (
    <div className={`border-2 ${rankColors[rank]} rounded-lg p-3 sm:p-4 transition-all`}>
      <div className="flex items-start justify-between gap-2 sm:gap-3 mb-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            {rank === 1 && <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600 flex-shrink-0" />}
            <span className="text-xs font-medium text-gray-500">#{rank}</span>
          </div>
          <h4 className="text-sm sm:text-base font-semibold text-gray-900 leading-tight">{condition}</h4>
          <p className="text-xs sm:text-sm text-gray-600">{category}</p>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-xl sm:text-2xl font-bold text-gray-900">{confidencePercent}%</div>
          <div className="text-xs text-gray-500">conf.</div>
        </div>
      </div>
      
      <div className="mt-2 sm:mt-3">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-500 ${rank === 1 ? 'bg-primary-600' : 'bg-gray-400'}`}
            style={{ width: `${confidencePercent}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
