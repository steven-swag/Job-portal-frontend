import { useEffect, useState } from 'react';
import {
  getProfile,
  updateProfile,
  uploadResume,
} from '../../services/profileService';

function Profile() {
  const [profile, setProfile] = useState(null);

  const [isEditing, setIsEditing] = useState(false);

  const [resume, setResume] = useState(null);

  const [formData, setFormData] = useState({
    skills: '',
    education: '',
    experience: '',
  });

  const fetchProfile = async () => {
    try {
      const response = await getProfile();

      console.log(response.data);

      setProfile(response.data.Users);

      setFormData({
        skills: response.data.Users.skills || '',
        education: response.data.Users.education || '',
        experience: response.data.Users.experience || '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const handleFileChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleResumeUpload = async () => {
    try {
      const formData = new FormData();

      formData.append('resume', resume);

      const response = await uploadResume(formData);

      alert(response.data.message);

      fetchProfile();
    } catch (error) {
      console.log('ERROR:', error.response?.data);
    }
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateProfile(formData);

      setProfile(response.data.updatedUser);

      setIsEditing(false);

      alert('Profile Updated Successfully');
    } catch (error) {
      console.log(error);
    }
  };

  if (!profile) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Profile</h1>

      <div className="bg-white shadow-md rounded-xl p-8">
        <p className="mb-3 text-lg">
          <strong>Name:</strong> {profile.name}
        </p>

        <p className="mb-3 text-lg">
          <strong>Email:</strong> {profile.email}
        </p>

        <p className="mb-3 text-lg">
          <strong>Role:</strong> {profile.role}
        </p>

        <p className="mb-3 text-lg">
          <strong>Skills:</strong> {profile.skills || 'Not Added'}
        </p>

        <p className="mb-3 text-lg">
          <strong>Education:</strong> {profile.education || 'Not Added'}
        </p>

        <p className="mb-3 text-lg">
          <strong>Experience:</strong> {profile.experience || 'Not Added'}
        </p>

        {profile.resume && (
          <p>
            <strong>Resume:</strong> {profile.resume?.split('/').pop()}
          </p>
        )}

        <div className="mt-8 border-t pt-6">
          <h2 className="text-2xl font-bold mb-4">Upload Resume</h2>

          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4"
          />

          <button
            onClick={handleResumeUpload}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700"
          >
            Upload Resume
          </button>
        </div>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Edit Profile
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(false)}
            className="mt-4 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
          >
            Cancel
          </button>
        )}

        {isEditing && (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-50 shadow-md rounded-xl p-6 mt-8"
          >
            <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>

            <input
              type="text"
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              placeholder="Skills"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
              placeholder="Education"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <textarea
              name="experience"
              value={formData.experience}
              onChange={handleChange}
              placeholder="Experience"
              rows="4"
              className="w-full border p-3 rounded-lg mb-4"
            />

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Save Profile
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Profile;
