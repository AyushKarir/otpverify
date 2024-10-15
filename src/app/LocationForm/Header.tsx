import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex flex-col p-8 w-full bg-zinc-700">
      <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
        <button className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9abb16398ab75a1bf47c2ac03e94e18aad36475b6b0d0253410350c51b74e5da?placeholderIfAbsent=true&apiKey=a8de33e955f64fd899e65d7a7a670ce6" className="object-contain w-6 aspect-square" alt="" />
        </button>
        <button className="gap-2 self-stretch px-4 py-2 my-auto text-base font-semibold whitespace-nowrap bg-white shadow-lg rounded-[64px] text-zinc-700">
          Edit
        </button>
      </div>
      <h1 className="mt-8 max-w-full text-3xl font-medium leading-10 text-white w-[296px]">
        Where are you from?
      </h1>
    </header>
  );
};

export default Header;