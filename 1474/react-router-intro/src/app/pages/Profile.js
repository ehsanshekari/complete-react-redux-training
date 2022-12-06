import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    console.log('This is an api call to fetch use with userId', userId);
  }, [userId]);

  return (
    <div>
      Profile<button onClick={() => {navigate('/')}}>GO TO HOME</button>
    </div>
  );
}

export default Profile;
