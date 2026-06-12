import { useEffect, useState } from 'react';
import { getMyApplications } from '../../services/applicationService';

function MyApplications() {
  const [applications, setApplications] = useState([]);

  const fetchApplications = async () => {
    try {
      const response = await getMyApplications();

      console.log(response.data);

      setApplications(response.data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Applications</h1>

      {applications.length === 0 ? (
        <p>No applications found.</p>
      ) : (
        applications.map((application) => (
          <div
            key={application._id}
            className="bg-white shadow-md rounded-xl p-6 mb-4"
          >
            <h2 className="text-xl font-bold">{application.job?.title}</h2>

            <p>{application.job?.company}</p>

            <p>{application.job?.location}</p>

            <p className="text-green-600 font-semibold">
              ₹{application.job?.salary}
            </p>

            <p className="mt-2">
              <strong>Status:</strong> {application.status}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default MyApplications;
