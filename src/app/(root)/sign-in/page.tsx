'use client';

import { CSSProperties, useState } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase/config';
import Container from '@/components/Container';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  width: '100%',
  color: 'black',
  backgroundColor: 'tomato'
};

const inputBlockStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px'
};

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [user] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      await user(email, password);
      sessionStorage.setItem('user', 'true');
      setEmail('');
      setPassword('');
      router.push('/account');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <span>Sign-In Page</span>
            <form onSubmit={handleSubmit}>
              <div style={inputBlockStyle}>
                <label htmlFor='email'>Email:</label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                />
              </div>

              <div style={inputBlockStyle}>
                <label htmlFor='password'>Password:</label>
                <input
                  type='password'
                  id='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>

              <button type='submit'>Sign In</button>
            </form>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default SignInPage;
