/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { CSSProperties, useLayoutEffect, useState } from 'react';
import Container from '@/components/Container';
import Camera from '@/components/Camera';
import { useRouter } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/config';
import { signOut } from 'firebase/auth';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  width: '100%',
  color: 'black',
  backgroundColor: 'palevioletred'
};

const AccountPage = () => {
  const [isCamera, setIsCamera] = useState(false);

  const [user] = useAuthState(auth);
  const router = useRouter();

  useLayoutEffect(() => {
    const userSession = sessionStorage.getItem('user');
    if (user || userSession) return;
    router.push('/sign-in');
  }, [user]);

  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <h2>Account Page</h2>

            <div>
              <span>{user?.email}</span>
            </div>

            <button
              onClick={() => {
                signOut(auth);
                sessionStorage.removeItem('user');
              }}
            >
              Log Out
            </button>

            <button onClick={() => setIsCamera(!isCamera)}>Camera</button>
          </section>
          {isCamera && <Camera />}
        </Container>
      </main>
    </div>
  );
};

export default AccountPage;
