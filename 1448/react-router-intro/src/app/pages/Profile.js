import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(`call to server to get info of user ${userId}`);
  }, [userId]);

  return (
    <div>
      Profile for user: {userId}
      <br />
      <button onClick={() => navigate('/')}>GO HOME</button>
    </div>
  );
}

export default Profile;
