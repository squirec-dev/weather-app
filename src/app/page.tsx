'use client';

import { ReactElement, useState } from 'react';
import SearchHero from '@/modules/SearchHero';
import ForecastDisplay from '@/components/ForecastDisplay';
import { useSearchContext } from '@/hooks/useSearchContext';
import { WeatherApiErrorResponse, WeatherApiSuccessResponse } from '@/types/WeatherApi';

type SearchDataResponse = Record<never, never> | WeatherApiSuccessResponse | WeatherApiErrorResponse;

function isError(searchdata: SearchDataResponse): searchdata is WeatherApiErrorResponse {
  return !!searchdata && (searchdata as WeatherApiErrorResponse)?.error !== undefined;
}

function isSuccess(searchdata: SearchDataResponse): searchdata is WeatherApiSuccessResponse {
  return !!searchdata && (searchdata as WeatherApiSuccessResponse)?.location !== undefined;
}

const Home = (): ReactElement => {
  const [searchdata, setSearchdata] = useState<SearchDataResponse>({});
  const hasError = isError(searchdata) ? searchdata.error.message : "";
  const location = isSuccess(searchdata) ? searchdata.location : null;

  return (
    <section>
      <useSearchContext.Provider value={{ searchdata, setSearchdata }}>
        <SearchHero error={hasError} isExpanded={!location || !!hasError} />
        {location && (
          <div className='container'>
            <ForecastDisplay data={searchdata}/>
          </div>
        )}
      </useSearchContext.Provider>
    </section>
  )
}

export default Home;
