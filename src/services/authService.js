import api from './api';

export const sendOTP = (data) => {
  return api.post('/auth/send-otp', data);
};


export const verifyOTP = (data) => {
  return api.post('/auth/verify-otp', data);
};