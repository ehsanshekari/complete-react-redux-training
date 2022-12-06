import { useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom';

function Profile() {
  let {userId} = useParams();
  const navigate = useNavigate();
  
   useEffect(() => {
     console.log(`call an api to get the info for user with id ${userId}`)
   }, [userId])

  return (
    <div >
     Profile for user with id: {userId}
     <br />
     <button onClick={() => navigate('/')}> GO TO HOME</button>
    </div>
  );
}

export default Profile;
