import { MovieData } from '@/type';

const fetchMovieAll = async (q?: string, id?: number): Promise<MovieData[]> => {
  let url = `https://onebite-cinema-sever.vercel.app/movie`;

  if (q) {
    url += `/search?q=${q}`;
  }

  if (id) {
    url = `https://onebite-cinema-sever.vercel.app/movie/${id}`;
  }

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

export default fetchMovieAll;
