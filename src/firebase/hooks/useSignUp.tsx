import { Dispatch, SetStateAction } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';

type UseSignUpProps = {
  setEmail: Dispatch<SetStateAction<string>>;
  setPassword: Dispatch<SetStateAction<string>>;
  redirectPath: string;
};

const useSignUp = (props: UseSignUpProps) => {
  const { setEmail, setPassword, redirectPath } = props;

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const router = useRouter();

  const signUp = async (email: string, password: string) => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log('res:', res);
      if (!res) return false;
      setEmail('');
      setPassword('');
      router.push(redirectPath);
      return true;
    } catch (err) {
      console.error(err);
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
