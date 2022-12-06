import React, { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function Profile() {
  const {userId} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log('This is an api call to get the info of user:', userId);
  }, [])
  return <div>Profile
    <button onClick={() => {navigate('/')}}>Back to Home</button>
  </div>;
}

export default Profile;
