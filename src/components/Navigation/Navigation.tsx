import { UserAuth } from '@/firebase/context/UserAuth';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [loading, setLoading] = useState(true);

  const { user, googleSignIn, logOut } = UserAuth();

  const handleSignIn = async () => {
    try {
      googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise(resolve => setTimeout(resolve, 1150));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <nav style={{ marginBottom: '25px' }}>
      <ul style={{ display: 'flex', gap: '20px' }}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/sign-up'>Sign-Up</Link>
        </li>
        <li>
          <Link href='/sign-in'>Sign-In</Link>
        </li>
        <li>
          <Link href='/account'>Account</Link>
        </li>
      </ul>

      {loading ? null : !user ? (
        <ul className='flex'>
          <li onClick={handleSignIn} className='p-2 cursor-pointer'>
            Login
          </li>
          <li onClick={handleSignIn} className='p-2 cursor-pointer'>
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className='cursor-pointer' onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
