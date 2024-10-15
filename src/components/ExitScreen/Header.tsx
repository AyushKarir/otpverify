import React from 'react';

interface HeaderProps {
  logoSrc: string;
  welcomeText: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, welcomeText }) => {
  return (
    <header className="flex flex-col items-center px-20 pt-72 w-full text-xl font-medium leading-tight bg-zinc-700">
      <h1>{welcomeText}</h1>
      <img loading="lazy" src={logoSrc} alt="Company logo" className="object-contain z-10 mt-3.5 mb-0 aspect-[1.9] w-[209px]" />
    </header>
  );
};

export default Header;