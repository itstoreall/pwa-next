'use client';

import { CSSProperties } from 'react';
import Container from '@/components/Container';

const sectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  width: '100%',
  color: 'black',
  backgroundColor: 'yellowgreen'
};

const HomePage = () => {
  return (
    <div>
      <main>
        <Container label={'page'}>
          <section style={sectionStyle}>
            <h2>Home Page</h2>
          </section>
        </Container>
      </main>
    </div>
  );
};

export default HomePage;
