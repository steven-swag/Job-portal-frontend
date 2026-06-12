import { useState, useEffect } from 'react';
import { getJobs } from '../../services/jobservice';
import { applyForJob } from '../../services/applicationService';

function Jobs() {
  const [jobs, setjobs] = useState([]);
  const [message, setMessage] = useState('');

  const fetchJobs = async () => {
    try {
      const response = await getJobs();
      console.log(response.data);
      setjobs(response.data.jobs);
    } catch (error) {
      console.log(error);
    }
  };

  const handleApply = async (jobId) => {
    console.log(jobId);
    try {
      const responde = await applyForJob(jobId);

      if (response.data.success) {
        setMessage('Application Submitted Successfully');
      }
    } catch (error) {
      setMessage(
        error.response?.data?.message ||
          error.response?.data?.error ||
          'Application Failed',
      );
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Available Jobs</h1>

      {message && <p className="text-center text-green-600 mb-4">{message}</p>}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <div key={job._id} className="bg-white shadow-md rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">{job.title}</h2>

            <p className="text-gray-600">{job.company}</p>

            <p className="text-gray-600">{job.location}</p>

            <p className="text-green-600 font-semibold mt-2">{job.salary}</p>
            <button
              onClick={() => handleApply(job._id)}
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;
