import api from './api';

export const getJobs = () => {
  return api.get('/jobs');
};

export const createJob = (jobData) => {
  const token = localStorage.getItem('token');

  return api.post('/jobs', jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateJob = (jobId, jobData) => {
  const token = localStorage.getItem('token');

  return api.put(`/jobs/${jobId}`, jobData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteJob = (jobId) => {
  const token = localStorage.getItem('token');

  return api.delete(`/jobs/${jobId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const getMyJobs = () => {
  const token = localStorage.getItem('token');

  return api.get('/jobs/my-jobs', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
