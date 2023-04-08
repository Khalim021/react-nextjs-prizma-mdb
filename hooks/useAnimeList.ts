import useSwr from 'swr';
import dataFetcher from '@/lib/fetchdata';

const useAnimeList = () => {
  const {data, error, isLoading} = useSwr('/api/animes', dataFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  })

  return {
    data,
    error,
    isLoading
  }
}

export default useAnimeList