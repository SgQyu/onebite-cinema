import style from '@/pages/movie/[id].module.css';
import allMovies from '@/mock/dummy-all.json';

export default function Page() {
  const [
    {
      posterImgUrl,
      title,
      releaseDate,
      genres,
      runtime,
      company,
      subTitle,
      description,
    },
  ] = allMovies;
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
