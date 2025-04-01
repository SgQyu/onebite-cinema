import SearchbarLayout from '@/components/searchbar-layout';

import { ReactNode } from 'react';
import RecommandMovieItems from '@/components/movie-item-recommand';
import AllMovieItems from '@/components/movie-item-all';
import fetchMovieAll from '@/lib/fetch-movie-all';
import { InferGetStaticPropsType } from 'next';
import fetchMovieRecommand from '@/lib/fetch-movie-recommand';

// export const getServerSideProps = async () => {
//   const [allMovies, recommendMovies] = await Promise.all([
//     fetchMovieAll(),
//     fetchMovieRecommand(),
//   ]);

//   return {
//     props: { allMovies, recommendMovies },
//   };
// };
export const getStaticProps = async () => {
  const [allMovies, recommendMovies] = await Promise.all([
    fetchMovieAll(),
    fetchMovieRecommand(),
  ]);

  return {
    props: { allMovies, recommendMovies },
  };
};

// 컴포넌트 Type
// SSR : InferGetServerSidePropsType<typeof getServerSideProps>
// SSG : InferGetStaticPropsType<typeof getStaticProps>
export default function Home({
  allMovies,
  recommendMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        {recommendMovies.map((movie) => (
          <RecommandMovieItems key={movie.id} {...movie} />
        ))}
      </section>
      <section>
        <h3>등록된 모든 영화</h3>
        {allMovies.map((movie) => (
          <AllMovieItems key={movie.id} {...movie} />
        ))}
      </section>
    </div>
  );
}

Home.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
