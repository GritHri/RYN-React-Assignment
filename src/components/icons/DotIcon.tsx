import React from 'react';

const DotIcon: React.FC<React.SVGProps<SVGSVGElement>> = props => (
  <svg
    width={8}
    height={8}
    viewBox="0 0 8 8"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={4} cy={4} r={4} />
  </svg>
);

export default DotIcon;
