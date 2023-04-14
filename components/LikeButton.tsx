import React, { useMemo, useCallback } from 'react';
import axios from 'axios';
import useCurrentUser from '@/hooks/useCurrentUser';
import useLikes from '@/hooks/useLikes';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai'

interface LikeButtonProps {
  movieId: string
}

const LikeButton: React.FC<LikeButtonProps> = ({movieId}) => {
  const { mutate: mutateFavorites } = useLikes();
  const { data: currentUser, mutate } = useCurrentUser();

  const isLiked = useMemo(() => {
    const list = currentUser?.favoriteIds || [];

    return list.includes(movieId);
  }, [currentUser, movieId]);

  const handleLikedAnimes = useCallback(async () => {
    let response;

    if (isLiked) {
      response = await axios.delete('/api/interactions', { data: { movieId } });
    } else {
      response = await axios.post('/api/interactions', { movieId });
    }

    const updatedFavoriteIds = response?.data?.favoriteIds;

    mutate({ 
      ...currentUser, 
      favoriteIds: updatedFavoriteIds,
    });
    mutateFavorites();
  }, [movieId, isLiked, currentUser, mutate, mutateFavorites]);

  const Icon = isLiked ? AiOutlineCheck : AiOutlinePlus;

  return (
    <div onClick={handleLikedAnimes} className="cursor-pointer group/item w-6 h-6 lg:w-8 lg:h-8 border-white 
    border-2 rounded-full flex justify-center items-center transition hover:border-neutral-300">
      <Icon className="text-orange-600 group-hover/item:text-yellow-500" size={22} />
    </div>
  )
}

export default LikeButton