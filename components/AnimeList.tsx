import React from 'react';
import { isEmpty } from 'lodash';
import AnimeCard from './AnimeCard';

interface AnimeListProps {
  data: Record<string, any>[];
  title: string;
};

const AnimeList: React.FC<AnimeListProps> = ({data, title}) => {
  if(isEmpty(data)) {
    return null
  };


  return (
    <div className='px-4 md:px-12 space-x-8 mt-4'>
      <div>
        <p className='text-md text-white md:text-xl lg:text-2xl font-semibold mb-4'>
          {title}
        </p>
        <div className='grid grid-cols-4 gap-2'>
          {data.map((anime) => (
            <AnimeCard key={anime._id} data={anime} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AnimeList