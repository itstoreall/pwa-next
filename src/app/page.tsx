import Image from 'next/image';

const Home = () => {
  return (
    <div>
      <main>
        <Image
          src='https://nextjs.org/icons/next.svg'
          alt='Next.js logo'
          width={180}
          height={38}
          priority
        />
        <span>Home</span>
      </main>

      <footer>
        <span>footer</span>
      </footer>
    </div>
  );
};

export default Home;
