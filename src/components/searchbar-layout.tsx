import style from '@/components/styles/searchbar-layout.module.css';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';

export default function SearchbarLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const q = router.query.q as string;
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch(q || '');
  }, [q]);

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const onSubmit = () => {
    if (!search || q === search) return;
    router.push(`/search?q=${search}`);
  };

  const onDownEnterKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };

  return (
    <div>
      <div className={style.searchbar_container}>
        <input
          type="text"
          placeholder="검색어를 입력하세요."
          value={search}
          onChange={onChangeSearch}
          onKeyDown={onDownEnterKey}
        />
        <button onClick={onSubmit}>검색</button>
      </div>
      {children}
    </div>
  );
}
