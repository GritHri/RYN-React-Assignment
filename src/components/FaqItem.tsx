import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className='border-b border-[#2A2A2A] py-4'>
      <button 
        className='w-full text-left flex justify-between items-start focus:outline-none'
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`faq-${question}`}
      >
        <h3 className='text-white text-[32px] sm:text-xl font-medium'>{question}</h3>
        <span className='ml-4 text-white text-2xl'>{isOpen ? '-' : '+'}</span>
      </button>
      <div 
        id={`faq-${question}`}
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
        aria-hidden={!isOpen}
      >
        <p className='text-[#CBCBCB] pr-8 sm:pr-0 text-lg sm:text-base font-[400]'>{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
