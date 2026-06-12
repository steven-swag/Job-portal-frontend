import api from './api';

export const getDashboardStats = () => {
  const token = localStorage.getItem('token');

  return api.get('/dashboard/stats', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};