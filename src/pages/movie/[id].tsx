import style from '@/pages/movie/[id].module.css';
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import fetchMovieOne from '@/lib/fetch-movie-one';
import { useRouter } from 'next/router';
import Head from 'next/head';

// import { MovieData } from '@/type';

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const id = context.params!.id;
//   const oneMovie = await fetchMovieOne(Number(id));

//   return {
//     props: { oneMovie },
//   };
// };

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const oneMovie = await fetchMovieOne(Number(id));

  return {
    props: { oneMovie },
  };
};

export default function Page({
  oneMovie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();
  if (router.isFallback) return '로딩 중.....';
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
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:image" content={posterImgUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
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
    </>
  );
}
