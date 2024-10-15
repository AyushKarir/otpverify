import React from 'react';

interface LocationInputProps {
  label: string;
  value: string;
  className?: string;
}

const LocationInput: React.FC<LocationInputProps> = ({ label, value, className = '' }) => {
  return (
    <div className={`flex flex-col justify-center px-4 py-6 max-w-full rounded-3xl border border-solid bg-stone-200 border-stone-400 min-h-[88px] w-[296px] ${className}`}>
      <div className="flex flex-1 size-full">
        <div className="flex flex-col flex-1 shrink basis-0">
          <label className="text-xs">{label}</label>
          <div className="text-base">{value}</div>
        </div>
        <img loading="lazy" src="/pics/Down.png" className="object-contain shrink-0 my-auto w-6 aspect-square" alt="" />
      </div>
    </div>
  );
};

export default LocationInput;