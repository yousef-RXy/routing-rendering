import Link from 'next/link';
import NavLink from './nav-link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink link={'/news'} />
          </li>
          <li>
            <NavLink link={'/archive'} />
          </li>
        </ul>
      </nav>
    </header>
  );
}
