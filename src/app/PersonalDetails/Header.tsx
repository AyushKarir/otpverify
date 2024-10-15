import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col p-8 w-full bg-zinc-700">
      <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
        <div className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
          <img loading="lazy" src="/pics/Arrow.png" alt="" />
        </div>
      </div>
      <h1 className="mt-8 max-w-full text-3xl font-medium text-white w-[296px]">
        Personal Details
      </h1>
    </header>
  );
};

export default Header;