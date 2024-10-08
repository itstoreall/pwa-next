/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { CSSProperties, useEffect, useState } from 'react';
import useSignIn from '@/firebase/hooks/useSignIn';
import * as gt from '@/types/global';
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

const errorStyle: CSSProperties = {
  padding: '5px 10px',
  fontSize: '12px',
  color: 'red',
  backgroundColor: 'black'
};

const SignInPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isErr, setIsErr] = useState(false);

  const { signIn } = useSignIn({
    setEmail,
    setPassword,
    redirectPath: '/account'
  });

  useEffect(() => {
    if (!isErr) return;
    setIsErr(false);
  }, [email, password]);

  const handleSubmit = async (e: gt.SubmitFormEvent) => {
    e.preventDefault();
    const isSignedIn = await signIn(email, password);
    // console.log('isSignedIn:', isSignedIn);
    if (!isSignedIn) setIsErr(true);
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

              {isErr && <span style={errorStyle}>{'Error!'}</span>}
            </form>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default SignInPage;
