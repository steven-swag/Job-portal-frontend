import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);

  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            Job Tracker
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>

            <Link to="/jobs" className="hover:text-blue-600">
              Jobs
            </Link>

            <Link to="/profile" className="hover:text-blue-600">
              Profile
            </Link>

            {user?.role === 'admin' && (
              <Link to="/admin" className="hover:text-blue-600">
                Admin
              </Link>
            )}

            {user?.role === 'user' && (
              <Link
                to="/my-applications"
                className="hover:text-blue-600"
              >
                Applications
              </Link>
            )}

            {user ? (
              <>
                <p className="text-blue-500 font-semibold">
                  {user.name}
                </p>

                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            {showMenu ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {showMenu && (
          <div className="md:hidden flex flex-col gap-4 pb-4">
            <Link
              to="/"
              onClick={() => setShowMenu(false)}
              className="hover:text-blue-600"
            >
              Home
            </Link>

            <Link
              to="/jobs"
              onClick={() => setShowMenu(false)}
              className="hover:text-blue-600"
            >
              Jobs
            </Link>

            <Link
              to="/profile"
              onClick={() => setShowMenu(false)}
              className="hover:text-blue-600"
            >
              Profile
            </Link>

            {user?.role === 'admin' && (
              <Link
                to="/admin"
                onClick={() => setShowMenu(false)}
                className="hover:text-blue-600"
              >
                Admin
              </Link>
            )}

            {user?.role === 'user' && (
              <Link
                to="/my-applications"
                onClick={() => setShowMenu(false)}
                className="hover:text-blue-600"
              >
                Applications
              </Link>
            )}

            {user ? (
              <>
                <p className="text-blue-500 font-semibold">
                  {user.name}
                </p>

                <button
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-fit"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-fit"
              >
                Login
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;