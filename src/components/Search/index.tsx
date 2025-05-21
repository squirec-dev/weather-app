'use client';

import { ChangeEvent, ReactElement, useContext, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchContext } from '@/hooks/useSearchContext';
import getForecast from '@/utils/getForecast';

import styles from './search.module.css';

const Search = (): ReactElement => {
  const [searchterm, setSearchterm] = useState<string>('');

  const searchQuery = useDebounce(searchterm);

  const { setSearchdata } = useContext(useSearchContext);

  const fetchData = async (q: string): Promise<void> => {
    const forecast = await getForecast(q);
    
    if (forecast) {
      setSearchdata(forecast);
    }
  }

  useEffect(() => {
		if (searchQuery) {
    	fetchData(searchQuery);
		} else {
      setSearchdata({})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery])

  return (
    <div className={styles['search__wrapper']}>
      <SearchIcon />
      
      <input
        aria-label='Search'
        className={styles['search__input']}
        defaultValue={searchterm}
        id='search'
        name='search'
        placeholder='Search...'
        type='search'
        onChange={(event: ChangeEvent<HTMLInputElement>) => 
          setSearchterm(event.target.value)
        }
      />
    </div>
  );
}

export default Search;