// src/Profile.js
import React, { useEffect, useState } from 'react';
import api from './axiosConfig'; // Import the Axios instance

const Profile = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const { data } = await api.get('/users/profile');
        setProfile(data);
      } catch (error) {
        console.error('Error fetching profile:', error.response.data.message);
      }
    };

    fetchUserProfile();
  }, []);

  return (
    <div>
      {profile ? (
        <div>
          <h2>Welcome, {profile.name}</h2>
          <p>Email: {profile.email}</p>
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default Profile;
