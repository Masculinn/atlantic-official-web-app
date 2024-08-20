import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Adminastrator } from '@/components/admin/adminastrator';

const User = ({ username }) => {

  const router = useRouter();
  const { username: userName } = router.query;

  const [userData, setUserData] = useState(username);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await fetch(`/api/users/${encodeURIComponent(userName)}`);

        if (!res.ok) {
          throw new Error('User not found');
        }

        const fetchedUser = await res.json(); 
        setUserData(fetchedUser);
        
      } catch (error) {
        console.error('Error fetching user data:', error.message);
      }
    };
    if (!userData) {
      fetchUserData();
    }  
 
  }, [userName, userData]);

  return <Adminastrator {...userData}/>;

};

export default User;
