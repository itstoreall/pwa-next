import { Dispatch, SetStateAction } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';

type Props = {
  setEmail?: Dispatch<SetStateAction<string>>;
  setPassword?: Dispatch<SetStateAction<string>>;
  redirectPath?: string;
};

const useSignIn = (props: Props) => {
  const { setEmail, setPassword, redirectPath } = props;

  const [user] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const signIn = async (email: string, password: string) => {
    try {
      const res = await user(email, password);
      // console.log('res:', res);
      if (!res) return false;
      sessionStorage.setItem('user', res.user.uid);
      if (setEmail) setEmail('');
      if (setPassword) setPassword('');
      if (redirectPath) router.push(redirectPath);
      return true;
    } catch (err) {
      console.error('ERROR in signIn:', err);
      return false;
    }
  };

  return {
    signIn
  };
};

export default useSignIn;
