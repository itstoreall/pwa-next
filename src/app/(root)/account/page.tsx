'use client';

import { CSSProperties, useState } from 'react';
import useSignOut from '@/firebase/hooks/useSignOut';
import useAuth from '@/firebase/hooks/useAuth';
import Container from '@/components/Container';
import Camera from '@/components/Camera';

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

  const { logOut } = useSignOut({ redirectPath: '/sign-in' });
  const { user } = useAuth();

  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <h2>Account Page</h2>

            <div>
              <span>{user?.email}</span>
            </div>

            <button onClick={logOut}>Log Out</button>

            <button onClick={() => setIsCamera(!isCamera)}>Camera</button>
          </section>
          {isCamera && <Camera />}
        </Container>
      </main>
    </div>
  );
};

export default AccountPage;
