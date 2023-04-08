import React from 'react';
import { AiFillPlayCircle } from 'react-icons/ai'

interface AnimeCardProps {
  data: Record<string, any>
}

const AnimeCard: React.FC<AnimeCardProps> = ({data}) => {
  return (
    <div className='relative group bg-zinc-900 col-span h-[12vw]'>
      <img className='object-cover cursor-pointer transition duration shadow-xl
      rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-150
      w-full h-[12vw]' src={data?.thumbnailUrl} alt='thumbnailUrl' />
      <div className='absolute invisible opacity-0 top-0 transition duration-150 z-10
      sm:visible delay-150 w-full scale-0 group-hover:scale-110 group-hover:-translate-y-[6vw]
      group-hover:translate-x-[2vw] group-hover:opacity-100'>
        <img className='object-cover cursor-pointer transition duration 
        shadow-xl rounded-t-md w-full h-[12vw]' src={data?.thumbnailUrl} alt='thumbnail' />
        <div className='absolute z-10 bg-zinc-600 w-full transition shadow-md rounded-b-md p-2 lg:p-4'>
          <div className='flex flex-row items-center gap-3'>
            <div className='flex justify-center items-center cursor-pointer
            w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-full transition hover:bg-neutral-300' 
            onClick={() => {}}>
              <AiFillPlayCircle size={22} className='text-orange-700' />
            </div>
          </div>
          <p className='text-yellow-500 font-semibold mt-4'>
            Year: <span className='text-white text-sm'>{data?.year}</span>
          </p>
          <div className='flex flex-row items-center mt-1 gap-2 '>
            <p className='text-yellow-500 font-medium lg:text-sm'>
              Duration: <span className='text-white text-sm'>{data?.duration}</span>
            </p>
          </div>
          <div className='flex flex-row items-center mt-1 gap-2 '>
            <p className='text-yellow-500 font-medium lg:text-sm'>
            Quality: <span className='text-white text-sm'>{data?.quality}</span>
            </p>
          </div>
          <div className='flex flex-row items-center mt-1 gap-2 '>
            <p className='text-yellow-500 font-medium lg:text-sm'>
            Rating: <span className='text-white text-sm'>{data?.rating}</span>
            </p>
          </div>
          <div className='flex flex-row items-center mt-1 gap-2 '>
            <p className='text-yellow-500 font-normal lg:text-sm'>
            Genre: <span className='text-white text-sm'>{data?.genre}</span>
            </p>
          </div>
          <div className='flex flex-row items-center mt-1 gap-2 '>
            <p className='text-white font-normal lg:text-sm'>
              {data?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimeCard