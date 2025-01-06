'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavLink({ href, children, className = '' }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`cursor-pointer hover:scale-110 transition duration-300 ${
        isActive ? 'text-yellow-500' : ''
      } ${className}`}
    >
      {children}
    </Link>
  );
}
