import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getApplicantsForJob,
  updateApplicationStatus,
} from '../../services/applicationService';

function Applicants() {
  const { jobId } = useParams();

  const [applications, setApplications] = useState([]);

  const fetchApplicants = async () => {
    try {
      const response = await getApplicantsForJob(jobId);

      setApplications(response.data.applications);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, []);

  const handleStatusUpdate = async (applicationId, status) => {
    try {
      await updateApplicationStatus(applicationId, status);

      alert(`Application ${status}`);

      fetchApplicants();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Applicants</h1>

      {applications.length === 0 ? (
        <p>No applicants found.</p>
      ) : (
        applications.map((application) => (
          <div
            key={application._id}
            className="bg-white shadow-md rounded-xl p-6 mb-4"
          >
            <h2 className="text-xl font-bold">{application.applicant?.name}</h2>

            <p>{application.applicant?.email}</p>

            {application.applicant?.resume && (
              <p className="mt-2">
                <strong>Resume:</strong>{' '}
                <a
                  href={application.user.resume}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Resume
                </a>
              </p>
            )}

            <p className="mt-2">
              <strong>Status:</strong> {application.status}
            </p>

            <div className="flex gap-3 mt-4">
              <button
                onClick={() => handleStatusUpdate(application._id, 'accepted')}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Accept
              </button>

              <button
                onClick={() => handleStatusUpdate(application._id, 'rejected')}
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Applicants;
