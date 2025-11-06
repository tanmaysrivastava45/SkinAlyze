import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default api;

// Patient API
export const patientAPI = {
  getAll: () => api.get('/patients'),
  getById: (id) => api.get(`/patients/${id}`),
  create: (data) => api.post('/patients', data),
  update: (id, data) => api.put(`/patients/${id}`, data),
  delete: (id) => api.delete(`/patients/${id}`),
  search: (query) => api.get(`/patients/search?q=${query}`),
};

// Analysis API
export const analysisAPI = {
  classify: (formData) => api.post('/analysis/classify', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  }),
  getByPatient: (patientId) => api.get(`/analysis/patient/${patientId}`),
  getExplainability: (imageId) => api.get(`/analysis/explainability/${imageId}`),
};

// Tracking API
export const trackingAPI = {
  getProgress: (patientId) => api.get(`/tracking/progress/${patientId}`),
  compareVisits: (visitId1, visitId2) => api.get(`/tracking/compare/${visitId1}/${visitId2}`),
  getMetrics: (patientId) => api.get(`/tracking/metrics/${patientId}`),
};

// Sharing API
export const sharingAPI = {
  createSummary: (patientId, data) => api.post(`/sharing/summary/${patientId}`, data),
  getSummary: (summaryId) => api.get(`/sharing/summary/${summaryId}`),
  generatePDF: (summaryId) => api.get(`/sharing/pdf/${summaryId}`, { responseType: 'blob' }),
};

// Mock data for development
export const getMockPatients = () => Promise.resolve({
  data: [
    {
      id: '1',
      name: 'John Doe',
      age: 34,
      gender: 'Male',
      status: 'active',
      lastVisit: '2025-11-01',
      condition: 'Eczema',
      fitzpatrickType: 'III',
    },
    {
      id: '2',
      name: 'Jane Smith',
      age: 28,
      gender: 'Female',
      status: 'urgent',
      lastVisit: '2025-11-05',
      condition: 'Acne',
      fitzpatrickType: 'IV',
    },
    {
      id: '3',
      name: 'Michael Johnson',
      age: 45,
      gender: 'Male',
      status: 'active',
      lastVisit: '2025-10-28',
      condition: 'Psoriasis',
      fitzpatrickType: 'II',
    },
  ],
});
