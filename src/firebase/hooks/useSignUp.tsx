import { Dispatch, SetStateAction } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';

type Props = {
  setEmail?: Dispatch<SetStateAction<string>>;
  setPassword?: Dispatch<SetStateAction<string>>;
  redirectPath?: string;
};

const useSignUp = (props: Props) => {
  const { setEmail, setPassword, redirectPath } = props;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      if (!res) return false;
      if (setEmail) setEmail('');
      if (setPassword) setPassword('');
      if (redirectPath) router.push(redirectPath);
      return true;
    } catch (err) {
      console.error('ERROR in signUp:', err);
      return false;
    }
  };

  return {
    createUser: createUserWithEmailAndPassword,
    signUp,
    user,
    loading,
    error
  };
};

export default useSignUp;
