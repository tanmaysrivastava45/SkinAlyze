import React from 'react';

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
        { date: '2024-10-15', severity: 75, notes: 'Moderate eczema flare-up' },
        { date: '2024-10-22', severity: 68, notes: 'Topical steroid started' },
        { date: '2024-10-29', severity: 55, notes: 'Reduced itching' },
        { date: '2024-11-05', severity: 45, notes: 'Skin barrier improving' },
        { date: '2024-11-12', severity: 35, notes: 'Minimal flare-ups' },
      ],
      treatments: [
        'Hydrocortisone 1% cream',
        'CeraVe moisturizer',
        'Avoid fragrances',
      ]
    }
  };

  const data = progressData[patientId] || progressData['1'];
  const initial = data.timeline[0].severity;
  const current = data.timeline[data.timeline.length - 1].severity;
  const improvement = initial - current;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg">
          <div className="text-sm text-blue-600 font-semibold mb-2">Initial Severity</div>
          <div className="text-4xl font-bold text-blue-900">{initial}%</div>
          <div className="text-xs text-blue-600 mt-2">
            {new Date(data.timeline[0].date).toLocaleDateString()}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 shadow-lg">
          <div className="text-sm text-green-600 font-semibold mb-2">Current Severity</div>
          <div className="text-4xl font-bold text-green-900">{current}%</div>
          <div className="text-xs text-green-600 mt-2">
            {new Date(data.timeline[data.timeline.length - 1].date).toLocaleDateString()}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 shadow-lg">
          <div className="text-sm text-purple-600 font-semibold mb-2">Total Improvement</div>
          <div className="text-4xl font-bold text-purple-900">↓{improvement}%</div>
          <div className="text-xs text-purple-600 mt-2">
            {Math.round((improvement / initial) * 100)}% reduction
          </div>
        </div>
      </div>

      {/* Visual Progress Bar */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">📊 Progress Visualization</h3>
        <div className="space-y-3">
          {data.timeline.map((entry, index) => {
            const width = (100 - entry.severity);
            return (
              <div key={index} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">
                    {new Date(entry.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                  <span className="font-semibold">{entry.severity}% severity</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-500"
                    style={{ width: `${width}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">📋 Treatment Timeline</h3>
        <div className="space-y-4">
          {data.timeline.map((entry, index) => (
            <div key={index} className="flex gap-4 pb-4 border-b last:border-b-0">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{entry.severity}</span>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <div className="text-sm font-semibold text-gray-900">
                    {new Date(entry.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>
                  <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                    entry.severity > 70 ? 'bg-red-100 text-red-700' :
                    entry.severity > 40 ? 'bg-yellow-100 text-yellow-700' :
                    'bg-green-100 text-green-700'
                  }`}>
                    {entry.severity > 70 ? '🔴 High' : entry.severity > 40 ? '🟡 Medium' : '🟢 Low'}
                  </div>
                </div>
                <div className="text-sm text-gray-600">{entry.notes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Treatments */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-lg font-bold mb-4">💊 Current Treatment Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {data.treatments.map((treatment, index) => (
            <div key={index} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border border-green-200">
              <div className="text-green-600 text-2xl flex-shrink-0">✓</div>
              <div className="text-sm font-medium text-gray-800">{treatment}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientProgress;
