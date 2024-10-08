'use client';

import { CSSProperties, useState } from 'react';
import useSignUp from '@/firebase/hooks/useSignUp';
import * as gt from '@/types/global';
import Container from '@/components/Container';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  width: '100%',
  color: 'black',
  backgroundColor: 'skyblue'
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

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signUp, loading, error } = useSignUp({
    setEmail,
    setPassword,
    redirectPath: '/sign-in'
  });

  const handleSubmit = async (e: gt.SubmitFormEvent) => {
    e.preventDefault();
    await signUp(email, password);
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

              <button disabled={loading} type='submit'>
                Sign Up
              </button>

              {error && <span style={errorStyle}>{error.message}</span>}
            </form>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default SignUpPage;
