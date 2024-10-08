import { useContext, createContext, useState, useEffect } from 'react';
import {
  User,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth';
import * as gt from '@/types/global';
import { auth } from '../config';

type AuthContext = {
  user: User | null;
  googleSignIn: () => void;
  logOut: () => void;
};

const initContext = {
  user: null,
  googleSignIn: () => {},
  logOut: () => {}
};

const Context = createContext<AuthContext>(initContext);

export const AuthProvider = ({ children }: gt.ChildrenProps) => {
  // const [user, setUser] = useState<User | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  return (
    <Context.Provider value={{ user, googleSignIn, logOut }}>
      {children}
    </Context.Provider>
  );
};

export const UserAuth = () => {
  return useContext(Context);
};
