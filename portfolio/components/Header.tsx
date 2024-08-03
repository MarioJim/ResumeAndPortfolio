'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderLinkProps {
  children: React.ReactNode;
  href: string;
}

const HeaderLink = ({ children, href }: HeaderLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  const className = isActive ? 'headerActiveLink' : 'headerLink';
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

const Header = () => (
  <header className="headerRoot">
    <HeaderLink href="/">about me</HeaderLink>
    <div className="headerSeparator">/</div>
    <HeaderLink href="/resume">resume</HeaderLink>
  </header>
);

export default Header;
