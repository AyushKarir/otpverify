import React from 'react';
import StateSelector from './StateSelector';

const LocationSelector: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[360px]">
       <header className="flex flex-col p-8 w-full bg-zinc-700">
      <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
        <div className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
          <img loading="lazy" src="/pics/Arrow.png" alt="" className="object-contain w-6 aspect-square" />
        </div>
      </div>
      <h1 className="mt-8 max-w-full text-3xl font-medium text-white w-[296px]">
        Choose location
      </h1>
    </header>
    <main className="flex overflow-hidden flex-col flex-1 justify-between items-center pt-8 w-full text-base bg-stone-100 rounded-[32px_32px_32px_32px]">
    <div className="flex flex-col max-w-full w-[300px] h-[616px]">
          <StateSelector />
          <div className="flex gap-6 items-center mt-8 w-full font-semibold whitespace-nowrap">
      <img loading="lazy" src="/pics/Line.png" alt="" className="object-contain flex-1 shrink self-stretch my-auto aspect-[111.11] basis-0 stroke-[1px] stroke-neutral-200 w-[113px]" />
      <span className="self-stretch my-auto">OR</span>
      <img loading="lazy" src="/pics/Line.png" alt="" className="object-contain flex-1 shrink self-stretch my-auto w-28 aspect-[111.11] basis-0 stroke-[1px] stroke-neutral-200" />
    </div>
    <button className="flex gap-2 items-start px-6 py-4 mt-8 w-full font-semibold text-center bg-white rounded-3xl shadow-lg">
      <img loading="lazy" src="/pics/Location.png" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      <span>Use current location</span>
    </button>
          <p className="mt-8 text-sm leading-5 text-stone-500">
      This is used to give you information more accurate to your area.
    </p>

        </div>
      </main>
    </div>
  );
};

export default LocationSelector;