// // // // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // // import { Auth0Provider } from '@auth0/auth0-react';
// // // // import { Toaster } from 'react-hot-toast';
// // // // import { AuthProvider } from './context/AuthContext';
// // // // import ProtectedRoute from './components/auth/ProtectedRoute';
// // // // import Sidebar from './components/common/Sidebar';
// // // // import Navbar from './components/common/Navbar';
// // // // import DisclaimerBanner from './components/common/DisclaimerBanner';

// // // // // Pages
// // // // import Login from './pages/Login';
// // // // import Dashboard from './pages/Dashboard';
// // // // import PatientList from './pages/PatientList';
// // // // import PatientDetail from './pages/PatientDetail';
// // // // import AnalysisView from './pages/AnalysisView';
// // // // import ProgressTracking from './pages/ProgressTracking';
// // // // import ShareSummary from './pages/ShareSummary';
// // // // import ModelInfo from './pages/ModelInfo';
// // // // import Settings from './pages/Settings';

// // // // function App() {
// // // //   return (
// // // //     <Auth0Provider
// // // //       domain={import.meta.env.VITE_AUTH0_DOMAIN}
// // // //       clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
// // // //       authorizationParams={{
// // // //         redirect_uri: window.location.origin,
// // // //         audience: import.meta.env.VITE_AUTH0_AUDIENCE,
// // // //       }}
// // // //     >
// // // //       <AuthProvider>
// // // //         <Router>
// // // //           <div className="min-h-screen bg-gray-50">
// // // //             <Toaster position="top-right" />
            
// // // //             <Routes>
// // // //               <Route path="/login" element={<Login />} />
              
// // // //               <Route
// // // //                 path="/*"
// // // //                 element={
// // // //                   <ProtectedRoute>
// // // //                     <div className="flex h-screen overflow-hidden">
// // // //                       <Sidebar />
// // // //                       <div className="flex-1 flex flex-col overflow-hidden">
// // // //                         <Navbar />
// // // //                         <DisclaimerBanner />
// // // //                         <main className="flex-1 overflow-y-auto p-6">
// // // //                           <Routes>
// // // //                             <Route path="/" element={<Navigate to="/dashboard" replace />} />
// // // //                             <Route path="/dashboard" element={<Dashboard />} />
// // // //                             <Route path="/patients" element={<PatientList />} />
// // // //                             <Route path="/patients/:id" element={<PatientDetail />} />
// // // //                             <Route path="/patients/:id/analyze" element={<AnalysisView />} />
// // // //                             <Route path="/patients/:id/progress" element={<ProgressTracking />} />
// // // //                             <Route path="/patients/:id/share" element={<ShareSummary />} />
// // // //                             <Route path="/model-info" element={<ModelInfo />} />
// // // //                             <Route path="/settings" element={<Settings />} />
// // // //                           </Routes>
// // // //                         </main>
// // // //                       </div>
// // // //                     </div>
// // // //                   </ProtectedRoute>
// // // //                 }
// // // //               />
// // // //             </Routes>
// // // //           </div>
// // // //         </Router>
// // // //       </AuthProvider>
// // // //     </Auth0Provider>
// // // //   );
// // // // }

// // // // export default App;
// // // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // // import { Auth0Provider } from '@auth0/auth0-react';
// // // import { Toaster } from 'react-hot-toast';
// // // import { AuthProvider } from './context/AuthContext';
// // // import ProtectedRoute from './components/auth/ProtectedRoute';
// // // import Layout from './components/layout/Layout';

// // // // Pages
// // // import Login from './pages/Login';
// // // import Dashboard from './pages/Dashboard';
// // // import PatientList from './pages/PatientList';
// // // import PatientDetail from './pages/PatientDetail';
// // // import AnalysisView from './pages/AnalysisView';
// // // import ProgressTracking from './pages/ProgressTracking';
// // // import ShareSummary from './pages/ShareSummary';
// // // import ModelInfo from './pages/ModelInfo';
// // // import Settings from './pages/Settings';

// // // function App() {
// // //   return (
// // //     <Auth0Provider
// // //       domain={import.meta.env.VITE_AUTH0_DOMAIN || 'demo.auth0.com'}
// // //       clientId={import.meta.env.VITE_AUTH0_CLIENT_ID || 'demo-client-id'}
// // //       authorizationParams={{
// // //         redirect_uri: window.location.origin,
// // //         audience: import.meta.env.VITE_AUTH0_AUDIENCE,
// // //       }}
// // //     >
// // //       <AuthProvider>
// // //         <Router>
// // //           <div className="min-h-screen bg-gray-50">
// // //             <Toaster position="top-right" />
            
// // //             <Routes>
// // //               <Route path="/login" element={<Login />} />
              
// // //               <Route
// // //                 path="/*"
// // //                 element={
// // //                   <ProtectedRoute>
// // //                     <Layout>
// // //                       <Routes>
// // //                         <Route path="/" element={<Navigate to="/dashboard" replace />} />
// // //                         <Route path="/dashboard" element={<Dashboard />} />
// // //                         <Route path="/patients" element={<PatientList />} />
// // //                         <Route path="/patients/:id" element={<PatientDetail />} />
// // //                         <Route path="/patients/:id/analyze" element={<AnalysisView />} />
// // //                         <Route path="/patients/:id/progress" element={<ProgressTracking />} />
// // //                         <Route path="/patients/:id/share" element={<ShareSummary />} />
// // //                         <Route path="/model-info" element={<ModelInfo />} />
// // //                         <Route path="/settings" element={<Settings />} />
// // //                       </Routes>
// // //                     </Layout>
// // //                   </ProtectedRoute>
// // //                 }
// // //               />
// // //             </Routes>
// // //           </div>
// // //         </Router>
// // //       </AuthProvider>
// // //     </Auth0Provider>
// // //   );
// // // }

// // // export default App;
// // import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// // import { Toaster } from 'react-hot-toast';
// // import { AuthProvider } from './context/AuthContext';
// // import ProtectedRoute from './components/auth/ProtectedRoute';
// // import Layout from './components/layout/Layout';

// // // Pages
// // import Login from './pages/Login';
// // import Dashboard from './pages/Dashboard';
// // import PatientList from './pages/PatientList';
// // import PatientDetail from './pages/PatientDetail';
// // import AnalysisView from './pages/AnalysisView';
// // import ProgressTracking from './pages/ProgressTracking';
// // import ShareSummary from './pages/ShareSummary';
// // import ModelInfo from './pages/ModelInfo';
// // import Settings from './pages/Settings';

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <Router>
// //         <div className="min-h-screen bg-gray-50">
// //           <Toaster position="top-right" />
          
// //           <Routes>
// //             <Route path="/login" element={<Login />} />
            
// //             <Route
// //               path="/*"
// //               element={
// //                 <ProtectedRoute>
// //                   <Layout>
// //                     <Routes>
// //                       <Route path="/" element={<Navigate to="/dashboard" replace />} />
// //                       <Route path="/dashboard" element={<Dashboard />} />
// //                       <Route path="/patients" element={<PatientList />} />
// //                       <Route path="/patients/:id" element={<PatientDetail />} />
// //                       <Route path="/patients/:id/analyze" element={<AnalysisView />} />
// //                       <Route path="/patients/:id/progress" element={<ProgressTracking />} />
// //                       <Route path="/patients/:id/share" element={<ShareSummary />} />
// //                       <Route path="/model-info" element={<ModelInfo />} />
// //                       <Route path="/settings" element={<Settings />} />
// //                     </Routes>
// //                   </Layout>
// //                 </ProtectedRoute>
// //               }
// //             />
// //           </Routes>
// //         </div>
// //       </Router>
// //     </AuthProvider>
// //   );
// // }

// // export default App;
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { AuthProvider } from './context/AuthContext';
// import ProtectedRoute from './components/auth/ProtectedRoute';
// import Layout from './components/layout/Layout';

// // Pages
// import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
// import PatientList from './pages/PatientList';
// import PatientDetail from './pages/PatientDetail';
// import AnalysisView from './pages/AnalysisView';
// import ProgressTracking from './pages/ProgressTracking';
// import ShareSummary from './pages/ShareSummary';
// import ModelInfo from './pages/ModelInfo';
// import Settings from './pages/Settings';
// import DailyHuddle from './pages/DailyHuddle';
// import DetectionAI from './pages/DetectionAI';

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <div className="min-h-screen bg-gray-50">
//           <Toaster position="top-right" />
          
//           <Routes>
//             <Route path="/login" element={<Login />} />
            
//             <Route
//               path="/*"
//               element={
//                 <ProtectedRoute>
//                   <Layout>
//                     <Routes>
//                       <Route path="/" element={<Navigate to="/dashboard" replace />} />
//                       <Route path="/dashboard" element={<Dashboard />} />
//                       <Route path="/patients" element={<PatientList />} />
//                       <Route path="/patients/:id" element={<PatientDetail />} />
//                       <Route path="/patients/:id/analyze" element={<AnalysisView />} />
//                       <Route path="/patients/:id/progress" element={<ProgressTracking />} />
//                       <Route path="/patients/:id/share" element={<ShareSummary />} />
//                       <Route path="/huddle" element={<DailyHuddle />} />
//                       <Route path="/detection" element={<DetectionAI />} />
//                       <Route path="/model-info" element={<ModelInfo />} />
//                       <Route path="/settings" element={<Settings />} />
//                     </Routes>
//                   </Layout>
//                 </ProtectedRoute>
//               }
//             />
//           </Routes>
//         </div>
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Layout from './components/layout/Layout';

// Pages
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PatientList from './pages/PatientList';
import PatientDetail from './pages/PatientDetail';
import AnalysisView from './pages/AnalysisView';
import ProgressTracking from './pages/ProgressTracking';
import ShareSummary from './pages/ShareSummary';
import ModelInfo from './pages/ModelInfo';
import Settings from './pages/Settings';
import DailyHuddle from './pages/DailyHuddle';
import DetectionAI from './pages/DetectionAI';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Toaster position="top-right" />
          
          <Routes>
            <Route path="/login" element={<Login />} />
            
            <Route
              path="/*"
              element={
                <ProtectedRoute>
                  <Layout>
                    <Routes>
                      <Route path="/" element={<Navigate to="/dashboard" replace />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/patients" element={<PatientList />} />
                      <Route path="/patients/:id" element={<PatientDetail />} />
                      <Route path="/patients/:id/analyze" element={<AnalysisView />} />
                      <Route path="/patients/:id/progress" element={<ProgressTracking />} />
                      <Route path="/patients/:id/share" element={<ShareSummary />} />
                      <Route path="/huddle" element={<DailyHuddle />} />
                      <Route path="/detection" element={<DetectionAI />} />
                      <Route path="/model-info" element={<ModelInfo />} />
                      <Route path="/settings" element={<Settings />} />
                    </Routes>
                  </Layout>
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
