import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '../styles/_global.scss';
import '../styles/_reset.scss';
import { ChildrenProps } from '@/types/global';
import ClientSideLayout from '@/components/ClientSide';
import NotificationManager from '@/components/NotificationManager';
import Container from '@/components/Container';
import Navigation from '@/components/Navigation';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
});

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: 'PWA-NEXT',
  description: 'Next.js PWA'
};

export const viewport: Viewport = {
  themeColor: '#000000'
};

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Container label={'page'}>
          <header style={{ marginBottom: '25px' }}>
            <Navigation />
            <NotificationManager />
          </header>
        </Container>
        <ClientSideLayout>{children}</ClientSideLayout>
      </body>
    </html>
  );
}
