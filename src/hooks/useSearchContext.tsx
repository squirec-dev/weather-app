import { createContext } from 'react';
import { WeatherApiSuccessResponse, WeatherApiErrorResponse } from '@/types/WeatherApi';

type WeatherApiResponse = WeatherApiSuccessResponse | WeatherApiErrorResponse | Record<never, never>;

interface SearchContextType {
  searchdata: WeatherApiResponse;
  setSearchdata: (state: WeatherApiResponse) => void;
}
  
export const useSearchContext = createContext<SearchContextType>({
  searchdata: {},
  setSearchdata: () => {},
});