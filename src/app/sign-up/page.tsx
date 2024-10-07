'use client';

import { CSSProperties, useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import Container from '@/components/Container';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
};

const inputBlockStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px'
};

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  useEffect(() => {
    console.log('user, loading, error:', Boolean(user), loading, error);
  }, [user, loading, error]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      console.log('Email:', email);
      console.log('Password:', password);
      const res = await createUserWithEmailAndPassword(email, password);
      console.log('res:', res);
      setEmail('');
      setPassword('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <span>Sign-Up Page</span>
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

              <button type='submit'>Sign Up</button>
            </form>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default SignUpPage;
