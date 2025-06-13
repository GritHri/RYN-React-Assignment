import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, startDate, endDate }) => {
  return (
    <div>
      <div className='flex justify-between items-start'>
        <div className='my-auto'>
          <h3 className='text-white text-2xl sm:text-xl font-semibold'>{title}</h3>
        </div>
        <span className='text-white text-sm px-4 py-2 rounded-full whitespace-nowrap'>
            <p className='mt-1 text-2xl sm:text-lg'>{company}</p>
            <p className='text-lg sm:text-sm font-[400]'>{startDate} - {endDate}</p>
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;
