import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './index.css';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-600 via-indigo-700 to-purple-700 relative overflow-hidden">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>

      <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-300/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 py-20 text-center text-white">
        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Find Your Dream Job Today
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl max-w-3xl mx-auto mb-10"
        >
          Explore thousands of job opportunities, track your applications,
          upload your resume, and connect with top companies through our Job
          Portal Platform.
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/jobs"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
          >
            Explore Jobs
          </Link>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div>
            <h2 className="text-4xl font-bold">10K+</h2>
            <p>Jobs Posted</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">5K+</h2>
            <p>Companies</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">50K+</h2>
            <p>Candidates</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">95%</h2>
            <p>Success Rate</p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white text-black p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Search Jobs</h2>

            <p>Browse and apply for jobs from leading companies worldwide.</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white text-black p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Track Applications</h2>

            <p>
              Monitor application status and stay updated on hiring decisions.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -10 }}
            className="bg-white text-black p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>

            <p>
              Maintain a professional profile and share your resume with
              recruiters.
            </p>
          </motion.div>
        </div>

        {/* Top Companies */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold mb-10">Trusted By Top Companies</h2>

          <div className="overflow-hidden w-full">
            <div className="flex w-max animate-marquee gap-16 items-center">
              {/* First Set */}
              <img
                src="https://cdn.simpleicons.org/google"
                alt="Google"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/microsoft"
                alt="Microsoft"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/amazon"
                alt="Amazon"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/meta"
                alt="Meta"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/netflix"
                alt="Netflix"
                className="w-12 h-12"
              />

              {/* Duplicate Set */}
              <img
                src="https://cdn.simpleicons.org/google"
                alt="Google"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/microsoft"
                alt="Microsoft"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/amazon"
                alt="Amazon"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/meta"
                alt="Meta"
                className="w-12 h-12"
              />
              <img
                src="https://cdn.simpleicons.org/netflix"
                alt="Netflix"
                className="w-12 h-12"
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mt-24 bg-white/10 backdrop-blur-md rounded-3xl p-10"
        >
          <h2 className="text-3xl font-bold mb-4">
            Start Your Career Journey Today
          </h2>

          <p className="mb-6">
            Join thousands of job seekers and employers on our platform.
          </p>

          <Link
            to="/jobs"
            className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
