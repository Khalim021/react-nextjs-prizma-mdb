import useSWR from 'swr';
import fetchData from '@/lib/fetchdata';

const useCurrentUser = () => {
  const { data, error, isLoading, mutate} = useSWR('/api/currentUser', fetchData);

  return {
    data,
    error,
    isLoading,
    mutate
  }
}

export default useCurrentUser













