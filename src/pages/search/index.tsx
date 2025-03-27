import SearchResultMovieItems from '@/components/movie-item-search-result';
import SearchbarLayout from '@/components/searchbar-layout';
import { ReactNode } from 'react';
import allMovies from '@/mock/dummy-all.json';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();
  const q = router.query.q as string;

  const filterMovie = () => {
    return allMovies.filter((movie): string | boolean =>
      movie.title.includes(q)
    );
  };

  const filterMovieData = filterMovie();

  return (
    <div>
      {filterMovieData.map((movie) => (
        <SearchResultMovieItems key={movie.id} {...movie} />
      ))}
    </div>
  );
}

Page.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
