import { useState } from 'react';
import { sendOTP } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();

  const onchangeName = (e) => {
    setName(e.target.value);
  };

  const onchangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await sendOTP({ name, email });
      setMessage(response.data.message);
      navigate('/verify-otp', {
        state: {
          email,
        },
      });
    } catch (error) {
      setMessage(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black/10">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <input
            type="name"
            placeholder="Username"
            className="border p-3 rounded-lg  mb-4"
            value={name}
            onChange={onchangeName}
          />

          <input
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg mb-4"
            value={email}
            onChange={onchangeEmail}
            className="border p-3 rounded-lg mb-4"
          />

          <button className="bg-blue-600 p-3 text-white rounded-lg hover:bg-blue-700 transition ">
            Send OTP
          </button>

          {message && (
            <p className="text-center text-green-600 mt-4">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Login;
