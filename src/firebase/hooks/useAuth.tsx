import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';

const useAuth = () => {
  const [user] = useAuthState(auth);

  return { user, authConfig: auth };
};

export default useAuth;
