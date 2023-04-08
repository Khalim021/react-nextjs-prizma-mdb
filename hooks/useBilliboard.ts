import useSwr from 'swr';
import dataFetcher from '@/lib/fetchdata';

const useBilliboard = () => {
  const {data, error, isLoading} = useSwr('/api/randomAnime', dataFetcher, {
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

export default useBilliboard