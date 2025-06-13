// src/components/ExpertiseCard.tsx
import React from 'react';
import DotIcon from './icons/DotIcon';

interface ExpertiseCardProps {
  title: string;
  children: React.ReactNode;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ title, children }) => (
  <div className="flex gap-4 sm:flex-col">
    <div className="flex-shrink-0 mt-1">
      <DotIcon className="text-white" />
    </div>
    <div>
      <h4 className="text-2xl sm:text-lg font-bold text-white mb-2">{title}</h4>
      <p className="text-base sm:text-sm text-[#CBCBCB] leading-relaxed font-[400]">
        {children}
      </p>
    </div>
  </div>

);

export default ExpertiseCard;
