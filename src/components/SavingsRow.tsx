import React from 'react';

interface SavingsRowProps {
  kpi1: string;
  kpi2: string;
}

const SavingsRow: React.FC<SavingsRowProps> = ({ kpi1, kpi2 }) => (
  <div className="flex flex-row justify-between items-center px-4 md:px-10 gap-6 w-full" aria-label="savings-row">
    <div className="flex flex-col items-center">
      <span className="text-[1.25rem] md:text-[1.25rem] font-bold text-gray-700">{kpi1}</span>
      <span className="text-[0.875rem] text-gray-600">Weekly time saved</span>
    </div>
    <div className="flex flex-col items-center">
      <span className="text-[1.25rem] md:text-[1.25rem] font-bold text-gray-700">{kpi2}</span>
      <span className="text-[0.875rem] text-gray-600">Weekly cost savings</span>
    </div>
  </div>
);

export default SavingsRow; 