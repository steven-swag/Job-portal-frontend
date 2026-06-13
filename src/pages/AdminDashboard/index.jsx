import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  createJob,
  getMyJobs,
  deleteJob,
  updateJob,
} from '../../services/jobService';

import { getDashboardStats } from '../../services/dashboardService';

function AdminDashboard() {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    salary: '',
    description: '',
  });

  const [message, setMessage] = useState('');
  const [jobs, setJobs] = useState([]);
  const [editingJobId, setEditingJobId] = useState(null);
  const [stats, setStats] = useState(null);

  const fetchDashboardStats = async () => {
    try {
      const response = await getDashboardStats();

      setStats(response.data.status);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchJobs = async () => {
    try {
      const response = await getMyJobs();

      setJobs(response.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
    fetchDashboardStats();
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      let response;

      if (editingJobId) {
        response = await updateJob(editingJobId, formData);

        setMessage('Job Updated Successfully');

        setEditingJobId(null);
      } else {
        response = await createJob(formData);

        setMessage('Job Created Successfully');
      }

      setFormData({
        title: '',
        company: '',
        location: '',
        salary: '',
        description: '',
      });

      fetchJobs();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.response?.data?.error ||
          'Failed to Create Job',
      );
    }
  };

  const handleDelete = async (jobId) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this job?',
    );

    if (!confirmDelete) {
      return;
    }

    try {
      const response = await deleteJob(jobId);

      

      setMessage('Job Deleted Successfully');

      fetchJobs();
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.response?.data?.error ||
          'Failed to Delete Job',
      );
    }
  };

  const handleEdit = (job) => {
    setEditingJobId(job._id);

    setFormData({
      title: job.title,
      company: job.company,
      location: job.location,
      salary: job.salary,
      description: job.description,
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>
        {stats && (
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-100 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Total Jobs</h2>
              <p className="text-3xl font-bold">{stats.totalJobs}</p>
            </div>

            <div className="bg-green-100 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Applications</h2>
              <p className="text-3xl font-bold">{stats.totalApplications}</p>
            </div>

            <div className="bg-purple-100 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Total Users</h2>
              <p className="text-3xl font-bold">{stats.totalUsers}</p>
            </div>

            <div className="bg-green-200 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Accepted</h2>
              <p className="text-3xl font-bold">{stats.acceptedApplications}</p>
            </div>

            <div className="bg-red-200 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Rejected</h2>
              <p className="text-3xl font-bold">{stats.rejectedApplications}</p>
            </div>

            <div className="bg-yellow-200 p-6 rounded-xl text-center">
              <h2 className="text-lg font-semibold">Pending</h2>
              <p className="text-3xl font-bold">{stats.pendingApplications}</p>
            </div>
          </div>
        )}
        {message && (
          <p className="text-center text-green-600 mb-4">{message}</p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="textr"
            name="salary"
            placeholder="Salary"
            value={formData.salary}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
            className="w-full border p-3 rounded-lg mb-4"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
          >
            {editingJobId ? 'Update Job' : 'Create Job'}
          </button>
        </form>

        <div className="mt-10 border-t pt-6">
          <h2 className="text-2xl font-bold mb-6">Manage Jobs</h2>

          {jobs.length === 0 ? (
            <p>No jobs found</p>
          ) : (
            jobs.map((job) => (
              <div
                key={job._id}
                className="border rounded-xl p-4 mb-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4"
              >
                <div>
                  <h3 className="text-xl font-bold">{job.title}</h3>

                  <p className="text-gray-600">{job.company}</p>

                  <p className="text-gray-600">{job.location}</p>

                  <p className="text-green-600 font-semibold">₹{job.salary}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/applicants/${job._id}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 text-center"
                  >
                    Applicants
                  </Link>

                  <button
                    onClick={() => handleEdit(job)}
                    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(job._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
