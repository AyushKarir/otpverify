import React from 'react';

interface VerificationOptionProps {
  text: string;
  imageSrc: string;
  onClick: () => void;
  className?: string;
}

const VerificationOption: React.FC<VerificationOptionProps> = ({ text, imageSrc, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`flex flex-col justify-center px-4 py-6 w-full whitespace-nowrap rounded-3xl border border-solid bg-stone-200 border-stone-300 max-w-[296px] ${className}`}
    >
      <div className="flex gap-2 items-start w-full">
        <img src={imageSrc} alt="" className="object-contain shrink-0 w-6 aspect-square" />
        <span className="flex-1 shrink basis-0">{text}</span>
      </div>
    </button>
  );
};

export default VerificationOption;