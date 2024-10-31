'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function NavLink({ link }) {
  const path = usePathname();

  return (
    <Link href={link} className={path.startsWith(link) ? 'active' : undefined}>
      News
    </Link>
  );
}

export default NavLink;
