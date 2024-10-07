import Link from 'next/link';

const Navigation = () => {
  return (
    <nav style={{ marginBottom: '25px' }}>
      <ul style={{ display: 'flex', gap: '20px' }}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/sign-up'>Sign-Up</Link>
        </li>
        <li>
          <Link href='/sign-in'>Sign-In</Link>
        </li>
        <li>
          <Link href='/account'>Account</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
