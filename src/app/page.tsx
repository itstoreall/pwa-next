'use client';
import { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import Container from '@/components/Container';
import Image from 'next/image'; // Import next/image for optimization

const CameraComponent = () => {
  const webcamRef = useRef<Webcam>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const capturePhoto = () => {
    if (webcamRef.current) {
      const image = webcamRef.current.getScreenshot();
      setImageSrc(image);
    } else {
      console.error('Webcam not initialized');
    }
  };

  useEffect(() => {
    console.log('imageSrc:', imageSrc);
  }, [imageSrc]);

  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat='image/jpeg'
        width={200}
        height={200}
        videoConstraints={{
          facingMode: 'environment' // back camera for mobile devices
        }}
      />
      <button onClick={capturePhoto}>Take Photo</button>
      {imageSrc && (
        <div>
          <h2>Captured Photo:</h2>
          <Image
            src={imageSrc}
            alt='Captured'
            width={200}
            height={200}
            priority
            unoptimized
          />
        </div>
      )}

      <style jsx>{`
        img {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <main>
        <Container label={'page'}>
          <CameraComponent />
          <span>Home</span>
        </Container>
      </main>
    </div>
  );
};

export default Home;
