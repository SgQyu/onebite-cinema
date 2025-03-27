import style from '@/components/styles/movie-item-recommand.module.css';

import type { MovieData } from '@/type';
import Link from 'next/link';

export default function RecommandMovieItems({
  id,
  posterImgUrl,
  title,
}: MovieData) {
  return (
    <Link href={`/movie/${id}`} className={style.container}>
      <img src={posterImgUrl} alt={title} />
    </Link>
  );
}
