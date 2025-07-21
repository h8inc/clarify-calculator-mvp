import React, { useState } from 'react';
import { Slider } from './ui/slider';

interface SliderControlProps {
  label: string;
  value: number;
  setValue: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  valueDisplay: string;
  minLabel: string;
  maxLabel: string;
  unit?: string;
  className?: string;
}

const SliderControl: React.FC<SliderControlProps> = ({
  label, value, setValue, min, max, step = 1, valueDisplay, minLabel, maxLabel, unit, className = ""
}) => (
  <div className={`flex flex-col justify-between lg:h-full bg-[#FDFEFE] rounded-2xl border border-gray-100 shadow-sm p-4 w-full min-h-[120px] ${className}`}>
    <div className="flex flex-row justify-between items-end">
      <span className="text-[1.125rem] font-medium text-gray-900 font-['Manrope']">{label}</span>
      <span className="text-[1.125rem] font-semibold text-gray-700 font-['Manrope']">
        {valueDisplay}{unit && <span className="text-[0.875rem] font-normal text-gray-600 ml-1">{unit}</span>}
      </span>
    </div>
    <Slider
      min={min}
      max={max}
      step={step}
      value={[value]}
      onValueChange={([v]) => setValue(v)}
      className="w-full"
      aria-label={label}
    />
    <div className="flex flex-row justify-between text-[0.875rem] text-gray-600 font-['Manrope']">
      <span>{minLabel}</span>
      <span>{maxLabel}</span>
    </div>
  </div>
);

const SlidersPanel: React.FC = () => {
  const [headcount, setHeadcount] = useState(5);
  const [adminTime, setAdminTime] = useState(20);
  const [avgPay, setAvgPay] = useState(75000);

  return (
    <div className="flex flex-col gap-8 self-auto lg:w-full lg:h-full">
      <SliderControl
        label="Sales crew headcount?"
        value={headcount}
        setValue={setHeadcount}
        min={1}
        max={35}
        valueDisplay={`${headcount} members`}
        minLabel="1 member"
        maxLabel="35+ members"
        className="lg:flex-1"
      />
      <SliderControl
        label="CRM admin per person?"
        value={adminTime}
        setValue={setAdminTime}
        min={1}
        max={25}
        valueDisplay={`${adminTime} hours/week`}
        minLabel="1 hour/week"
        maxLabel="25+ hours/week"
        className="lg:flex-1"
      />
      <SliderControl
        label="Team’s avg. pay?"
        value={avgPay}
        setValue={setAvgPay}
        min={50000}
        max={250000}
        step={1000}
        valueDisplay={`$${avgPay.toLocaleString()}`}
        minLabel="$50,000"
        maxLabel="$250,000"
        className="lg:flex-1"
      />
    </div>
  );
};

export default SlidersPanel; 