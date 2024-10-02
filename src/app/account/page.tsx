import Image from 'next/image';

const Account = () => {
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
        <span>Account</span>
      </main>

      <footer>
        <span>NEXT.js</span>
      </footer>
    </div>
  );
};

export default Account;
