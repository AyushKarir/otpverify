import React from 'react';

interface NextButtonProps {
  onClick: () => void;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick }) => {
  return (
    <div className="flex flex-col justify-center p-8 w-full text-base text-white whitespace-nowrap bg-stone-100 rounded-[32px]">
      <button
        onClick={onClick}
        className="gap-2 self-stretch px-3 py-5 w-full bg-zinc-700 min-h-[64px] rounded-[32px]"
      >
        Next
      </button>
    </div>
  );
};

export default NextButton;