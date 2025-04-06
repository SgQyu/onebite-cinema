import SearchResultMovieItems from '@/components/movie-item-search-result';
import SearchbarLayout from '@/components/searchbar-layout';
import { ReactNode } from 'react';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import fetchMovieAll from '@/lib/fetch-movie-all';
import Head from 'next/head';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const searchMovies = await fetchMovieAll(q as string);

  return {
    props: { searchMovies },
  };
};

export default function Page({
  searchMovies,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>한입 시네마 - 검색 결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 시네마 - 검색 결과" />
        <meta
          property="og:description"
          content="한입 시네마에 상영 중인 영화들을 만나보세요.(입장료 : 10만원!)"
        />
      </Head>
      <div>
        {searchMovies.map((movie) => (
          <SearchResultMovieItems key={movie.id} {...movie} />
        ))}
      </div>
    </>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
