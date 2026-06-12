import api from './api';

export const applyForJob = (jobId) => {
  const token = localStorage.getItem('token');

  return api.post(
    `/applications/${jobId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};


export const getMyApplications = () => {
  const token = localStorage.getItem('token');

  return api.get('/applications/my-applications', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};


export const getApplicantsForJob = (jobId) => {
  const token = localStorage.getItem('token');

  return api.get(`/applications/job/${jobId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateApplicationStatus = (
  applicationId,
  status,
) => {
  const token = localStorage.getItem('token');

  return api.put(
    `/applications/${applicationId}/status`,
    { status },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};