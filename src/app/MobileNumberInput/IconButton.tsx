import React from 'react';

interface IconButtonProps {
  icon: string;
  alt: string;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, alt }) => {
  return (
    <button className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
      <img loading="lazy" src={icon} alt={alt} className="object-contain w-6 aspect-square" />
    </button>
  );
};

export default IconButton;