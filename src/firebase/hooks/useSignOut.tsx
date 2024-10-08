/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import useAuth from './useAuth';

type Props = {
  redirectPath?: string;
};

const useSignOut = (props: Props) => {
  const { redirectPath } = props;

  const { user, authConfig } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const userSessionUid = sessionStorage.getItem('user');
    if (user?.uid && userSessionUid) return;
    if (redirectPath) router.push(redirectPath);
  }, [user]);

  const logOut = async () => {
    try {
      await signOut(authConfig);
      sessionStorage.removeItem('user');
      return true;
    } catch (err) {
      console.error('ERROR in signIn:', err);
      return false;
    }
  };

  return {
    logOut
  };
};

export default useSignOut;
