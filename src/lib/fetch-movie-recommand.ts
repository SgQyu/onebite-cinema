import { MovieData } from '@/type';

const fetchMovieRecommand = async (): Promise<MovieData[]> => {
  const url = `http://localhost:12345/movie/random`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default fetchMovieRecommand;
