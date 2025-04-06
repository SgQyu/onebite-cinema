import { MovieData } from '@/type';

const fetchMovieOne = async (id: number): Promise<MovieData | null> => {
  const url = `https://onebite-cinema-sever.vercel.app/movie/${id}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error();
    }

    return await response.json();
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default fetchMovieOne;
