import React from 'react';

interface SavingsDescriptionProps {
  fromHours: number;
  toHours: number;
}

const SavingsDescription: React.FC<SavingsDescriptionProps> = ({ fromHours, toHours }) => (
  <div className="flex flex-col gap-2 text-center" aria-label="savings-description">
    <span className="text-[1.25rem] md:text-[1.25rem] font-medium text-gray-900 leading-snug">
      Less clicking and manual updates, more closing —{' '}
      <span className="text-[1.25rem] md:text-[1.25rem] font-semibold underline decoration-[#22FFC0] decoration-[3px] underline-offset-[6px]">
        increase selling time from {fromHours}h to {toHours}h.
      </span>
    </span>
  </div>
);

export default SavingsDescription; 