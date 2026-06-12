import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verifyOTP } from '../../services/authService';

function VerifyOtp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const location = useLocation();
  const email = location.state?.email;

  const onChangeOtp = (e) => {
    setOtp(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await verifyOTP({
        email,
        otp,
      });

      setMessage(response.data.message || 'OTP Verified');

      localStorage.setItem('token', response.data.token);

      localStorage.setItem('user', JSON.stringify(response.data.user));

      setTimeout(() => {
        const role = response.data.user.role;

        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/jobs');
        }
      }, 1000);
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.response?.data?.error ||
          'Verification Failed',
      );
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-black/20">
      <div className=" bg-white max-w-md shadow-lg w-full p-8 rounded-xl ">
        <h1 className="text-center text-3xl mb-6">Verify otp</h1>
        <p className="text-center text-gray-600 mb-6">{email}</p>

        <form
          className="flex flex-col gap-4 text-center "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="otp"
            value={otp}
            className="p-3 border rounded-lg "
            onChange={onChangeOtp}
          />

          <button className="bg-green-600 p-3 rounded-lg hover:bg-green-700 text-white transition">
            submit
          </button>

          {message && (
            <p className="text-center text-green-600 mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default VerifyOtp;
