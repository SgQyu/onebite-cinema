import style from '@/components/styles/global-layout.module.css';
import Link from 'next/link';
import { ReactNode } from 'react';

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <header className={style.header}>
        <Link href={'/'}>ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
