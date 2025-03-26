import GlobalLayout from '@/components/global-layout';
import '@/styles/globals.css';
import { NextComponentType } from 'next';
import type { AppProps } from 'next/app';
import { ReactNode } from 'react';

type SearchBar = NextComponentType & {
  getLayout: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: SearchBar }) {
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
