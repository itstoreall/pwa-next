'use client';

import { CSSProperties, useState } from 'react';
import Container from '@/components/Container';
import Camera from '@/components/Camera';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
};

const Account = () => {
  const [isCamera, setIsCamera] = useState(false);

  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <span>Account</span>
            <button onClick={() => setIsCamera(!isCamera)}>Camera</button>
          </section>
          {isCamera && <Camera />}
        </Container>
      </main>
    </div>
  );
};

export default Account;
