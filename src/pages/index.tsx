import SearchbarLayout from '@/components/searchbar-layout';

import { ReactNode } from 'react';
import allMovies from '@/mock/dummy-all.json';
import recommendsMovies from '@/mock/dummy-recommand.json';
import RecommandMovieItems from '@/components/movie-item-recommand';
import AllMovieItems from '@/components/movie-item-all';

export default function Home() {
  return (
    <div>
      <section>
        <h3>지금 가장 추천하는 영화</h3>
        {recommendsMovies.map((movie) => (
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
