import React from 'react';
import qoutes from '../assets/review-quote.svg';

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  active: boolean;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, role, content, active, image }) => {
  return (
    <div className={`transition-all duration-300 ${active ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}>
      <div className='rounded-2xl p-8 relative'>
      <div className='flex flex-col md:flex-row items-start justify-between gap-6 md:gap-8 mb-6'>
        <div className='flex items-center gap-4 w-full md:w-[500px]'>
            <img src={image} alt={name} className='w-12 h-12 rounded-full bg-gray-600' />
            <div>
            <h4 className='text-white text-lg font-semibold'>{name}</h4>
            <p className='text-[#CBCBCB] text-sm'>{role}</p>
            </div>
        </div>
        <div className='relative w-full md:w-[710px]'>
            <img src={qoutes} alt='Quote' className='w-6 h-6 absolute -top-2 left-0 opacity-70' />
            <p className='text-[#CBCBCB] text-[28px] sm:text-lg font-[500] leading-relaxed'>{content}</p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
