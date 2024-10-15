import React from 'react';

interface ActionButtonProps {
  text?: string;
  imageSrc?: string;
  onClick?: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, imageSrc, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex gap-2 items-start self-stretch px-4 py-2 my-auto ${
        text ? 'text-base font-semibold whitespace-nowrap' : 'w-14'
      } bg-white shadow-lg rounded-[64px] ${text ? 'text-zinc-700' : ''}`}
    >
      {imageSrc && <img src={imageSrc} alt="" className="object-contain w-6 aspect-square" />}
      {text}
    </button>
  );
};

export default ActionButton;