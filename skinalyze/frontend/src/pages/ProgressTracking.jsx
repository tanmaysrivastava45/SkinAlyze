// import { ArrowLeft } from 'lucide-react';
// import { Link, useParams } from 'react-router-dom';

// export default function ProgressTracking() {
//   const { id } = useParams();

//   return (
//     <div className="space-y-6">
//       <div className="flex items-center gap-4">
//         <Link to={`/patients/${id}`} className="p-2 hover:bg-gray-100 rounded-lg">
//           <ArrowLeft className="w-5 h-5" />
//         </Link>
//         <div>
//           <h1 className="text-2xl font-bold text-gray-900">Progress Tracking</h1>
//           <p className="text-gray-600 mt-1">Longitudinal monitoring and comparison</p>
//         </div>
//       </div>

//       <div className="card text-center py-12">
//         <p className="text-gray-500">Progress tracking feature coming soon</p>
//         <p className="text-sm text-gray-400 mt-2">
//           This will include before/after comparison, heatmaps, and metric visualization
//         </p>
//       </div>
//     </div>
//   );
// }
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const PatientProgress = ({ patientId }) => {
  // Hardcoded progress data
  const progressData = {
    '1': {
      condition: 'Acne',
      timeline: [
        { date: '2024-11-01', severity: 85, notes: 'Initial diagnosis - Severe inflammatory acne' },
        { date: '2024-11-08', severity: 78, notes: 'Started topical retinoid treatment' },
        { date: '2024-11-15', severity: 65, notes: 'Visible reduction in inflammation' },
        { date: '2024-11-22', severity: 52, notes: 'Continued improvement, less redness' },
        { date: '2024-11-29', severity: 40, notes: 'Significant improvement, minimal breakouts' },
        { date: '2024-12-06', severity: 28, notes: 'Nearly clear, maintenance phase' },
      ],
      treatments: [
        'Topical Retinoid (Tretinoin 0.05%)',
        'Benzoyl Peroxide 2.5%',
        'Gentle cleanser routine',
        'Oil-free moisturizer'
      ]
    },
    '2': {
      condition: 'Eczema',
      timeline: [
        { date: '2024-10-15', severity: 75, notes: 'Moderate eczema flare-up on hands' },
        { date: '2024-10-22', severity: 68, notes: 'Topical steroid started' },
        { date: '2024-10-29', severity: 55, notes: 'Reduced itching and redness' },
        { date: '2024-11-05', severity: 45, notes: 'Skin barrier improving' },
        { date: '2024-11-12', severity: 35, notes: 'Minimal flare-ups' },
        { date: '2024-11-19', severity: 25, notes: 'Maintenance with emollients' },
      ],
      treatments: [
        'Hydrocortisone 1% cream',
        'Heavy moisturizer (CeraVe)',
        'Avoid irritants (fragrances)',
        'Wet wrap therapy'
      ]
    },
    '3': {
      condition: 'Tinea/Fungal infection',
      timeline: [
        { date: '2024-11-10', severity: 70, notes: 'Ringworm on upper arm' },
        { date: '2024-11-17', severity: 55, notes: 'Antifungal cream applied' },
        { date: '2024-11-24', severity: 40, notes: 'Ring pattern fading' },
        { date: '2024-12-01', severity: 25, notes: 'Almost cleared' },
        { date: '2024-12-08', severity: 10, notes: 'Complete resolution' },
      ],
      treatments: [
        'Clotrimazole 1% cream',
        'Keep area dry',
        'Avoid tight clothing',
        'Continue for 2 weeks post-clearance'
      ]
    }
  };

  const data = progressData[patientId] || progressData['1'];

  // Chart data
  const chartData = {
    labels: data.timeline.map(t => new Date(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
    datasets: [
      {
        label: 'Severity Score',
        data: data.timeline.map(t => t.severity),
        borderColor: 'rgb(14, 165, 233)',
        backgroundColor: 'rgba(14, 165, 233, 0.1)',
        tension: 0.4,
        fill: true,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: true,
        text: 'Treatment Progress Over Time',
        font: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
        title: {
          display: true,
          text: 'Severity (%)'
        }
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Progress Chart */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="h-64">
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4">
          <div className="text-sm text-blue-600 font-medium">Initial Severity</div>
          <div className="text-3xl font-bold text-blue-900 mt-1">
            {data.timeline[0].severity}%
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4">
          <div className="text-sm text-green-600 font-medium">Current Severity</div>
          <div className="text-3xl font-bold text-green-900 mt-1">
            {data.timeline[data.timeline.length - 1].severity}%
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4">
          <div className="text-sm text-purple-600 font-medium">Improvement</div>
          <div className="text-3xl font-bold text-purple-900 mt-1">
            {data.timeline[0].severity - data.timeline[data.timeline.length - 1].severity}%
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">📋 Treatment Timeline</h3>
        <div className="space-y-4">
          {data.timeline.map((entry, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
              <div className="flex-shrink-0 w-24 text-sm text-gray-600">
                {new Date(entry.date).toLocaleDateString('en-US', { 
                  month: 'short', 
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-sm font-semibold">Severity: {entry.severity}%</div>
                  <div className={`text-xs px-2 py-1 rounded-full ${
                    entry.severity > 70 ? 'bg-red-100 text-red-700' :
                    entry.severity > 40 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {entry.severity > 70 ? 'High' : entry.severity > 40 ? 'Medium' : 'Low'}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{entry.notes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Treatments */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-bold mb-4">💊 Current Treatment Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.treatments.map((treatment, index) => (
            <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
              <div className="text-green-600 text-xl">✓</div>
              <div className="text-sm">{treatment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientProgress;
