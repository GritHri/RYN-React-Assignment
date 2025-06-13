import React from 'react';

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ title, description, image, tags, link }) => {
  return (
    <div className='bg-[#1E1E1E] rounded-[24px] p-6 flex flex-col md:flex-row gap-6'>
      <a href={link}>
        <img 
          src={image} 
          alt={`Work project: ${title}`} 
          className='w-full md:w-[572px] h-auto md:h-[429px] rounded-[24px] object-cover flex-shrink-0'
        />
      </a>
      <div className='flex-1 flex flex-col justify-between'>
        <div>
          <h4 className='text-white text-[28px] sm:text-xl font-[600] mb-2'>{title}</h4>
          <p className='text-[#CBCBCB] text-[16px] sm:text-sm font-[400] leading-relaxed mb-4'>{description}</p>
          <div className='flex flex-wrap gap-2 mb-6'>
            {tags.map((tag, index) => (
              <span 
                key={index} 
                className='text-[#CBCBCB] text-[12px] font-[400] border border-[#CBCBCB] rounded-full px-3 py-1 hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer'
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <a href={link} className='self-start rounded-[100px] py-3 px-6 bg-white text-black text-[14px] font-[600] hover:bg-black hover:text-white hover:border hover:border-white transition-colors duration-200 cursor-pointer'>
          View Case Study
        </a>
      </div>
    </div>
  );
};

export default WorkCard;
