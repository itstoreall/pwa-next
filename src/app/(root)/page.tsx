'use client';

import { CSSProperties } from 'react';
import Container from '@/components/Container';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px'
};

const Home = () => {
  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <span>Home</span>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default Home;
