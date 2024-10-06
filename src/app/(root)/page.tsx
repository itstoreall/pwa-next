'use client';
import Camera from '@/components/Camera';
import Container from '@/components/Container';
import { useState } from 'react';

const Home = () => {
  const [isCamera, setIsCamera] = useState(false);

  return (
    <div>
      <main>
        <Container label={'page'}>
          <section
            style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
          >
            <span>Home</span>
            <button onClick={() => setIsCamera(!isCamera)}>Camera</button>
          </section>
          {isCamera && <Camera />}
        </Container>
      </main>
    </div>
  );
};

export default Home;
