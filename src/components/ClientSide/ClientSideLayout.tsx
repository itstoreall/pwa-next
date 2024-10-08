'use client';

import { AuthProvider } from '@/firebase/context/UserAuth';
import { ChildrenProps } from '@/types/global';
import NotificationManager from '../NotificationManager';
import Navigation from '../Navigation';
import Container from '../Container';

const ClientSideLayout = ({ children }: ChildrenProps) => (
  <AuthProvider>
    <Container label={'page'}>
      <header style={{ marginBottom: '25px' }}>
        <Navigation />
        <NotificationManager />
      </header>
    </Container>

    {children}
  </AuthProvider>
);

export default ClientSideLayout;
