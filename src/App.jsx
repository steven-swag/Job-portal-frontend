import { BrowserRouter, Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import Home from './pages/Home';
import Login from './pages/Login';
import Jobs from './pages/Jobs';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import AdminDashboard from './pages/AdminDashboard';
import VerifyOtp from './pages/VerifyOtp';
import ProtectedRoutes from './routes/ProtectedRoutes';
import AdminRoute from './routes/AdminRoute';
import MyApplications from './pages/MyApplications';
import Applicants from './pages/Applicants';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/login" element={<Login />} />

          <Route
            path="/jobs"
            element={
              <ProtectedRoutes>
                <Jobs />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoutes>
                <Profile />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />

          <Route path="/verify-otp" element={<VerifyOtp />} />

          <Route
            path="/my-applications"
            element={
              <ProtectedRoutes>
                <MyApplications />
              </ProtectedRoutes>
            }
          />

          <Route
            path="/applicants/:jobId"
            element={
              <ProtectedRoutes>
                <Applicants />
              </ProtectedRoutes>
            }
          />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
