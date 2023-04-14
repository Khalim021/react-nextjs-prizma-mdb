import useSwr from 'swr';
import dataFetcher from '@/lib/fetchdata';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate} = useSwr('/api/currentUser', dataFetcher);

  return {
    data,
    error,
    isLoading,
    mutate
  }
}

export default useCurrentUser













