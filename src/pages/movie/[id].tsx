import style from '@/pages/movie/[id].module.css';
import { GetServerSidePropsContext, InferGetStaticPropsType } from 'next';
import fetchMovieOne from '@/lib/fetch-movie-one';

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id;
  const oneMovie = await fetchMovieOne(Number(id));

  return {
    props: { oneMovie },
  };
};

export default function Page({
  oneMovie,
}: InferGetStaticPropsType<typeof getServerSideProps>) {
  if (!oneMovie) return '문제가 발생했습니다. 다시 시도해주세요';

  const {
    posterImgUrl,
    title,
    releaseDate,
    genres,
    runtime,
    company,
    subTitle,
    description,
  } = oneMovie;
  return (
    <div className={style.container}>
      <div
        style={{ backgroundImage: `url('${posterImgUrl}')` }}
        className={style.cover_img_container}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <h2 className={style.title}>{title}</h2>
      <div>
        {releaseDate} / {genres.join(', ')} / {runtime}분
      </div>
      <div className={style.company}>{company}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
