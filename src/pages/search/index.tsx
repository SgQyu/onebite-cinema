import SearchResultMovieItems from '@/components/movie-item-search-result';
import SearchbarLayout from '@/components/searchbar-layout';
import { ReactNode } from 'react';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import fetchMovieAll from '@/lib/fetch-movie-all';

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
    <div>
      {searchMovies.map((movie) => (
        <SearchResultMovieItems key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
