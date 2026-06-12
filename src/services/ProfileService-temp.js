import api from './api';

export const getProfile = () => {
  const token = localStorage.getItem('token');

  return api.get('/users/profile', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = (data) => {
  const token = localStorage.getItem('token');

  return api.put('/users/profile', data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const uploadResume = (formData) => {
  const token = localStorage.getItem('token');

  return api.put('/users/upload-resume', formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
};
