import useSwr from 'swr'
import dataFetcher from '@/lib/fetchdata';

const useLikes = () => {
  const { data, error, isLoading, mutate } = useSwr('/api/likes', dataFetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });
  return {
    data,
    error,
    isLoading,
    mutate
  }
};

export default useLikes;