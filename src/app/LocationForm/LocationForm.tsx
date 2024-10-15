import React from 'react';
import LocationInput from './LocatoinInput';

interface LocationFormProps {
  onNext: () => void;
}

const LocationForm: React.FC<LocationFormProps> = ({ onNext }) => {
  const locationInputs = [
    { label: 'State', value: 'Karnataka / ಕರ್ನಾಟಕ' },
    { label: 'District', value: 'Bengaluru Urban' },
    { label: 'Pincode', value: '560016' },
  ];

  return (
    <main className="flex overflow-hidden flex-col justify-center bg-zinc-700 max-w-[360px] rounded-[32px]">
      <div className="flex flex-col w-full min-h-[800px]">
      <header className="flex flex-col p-8 w-full bg-zinc-700">
      <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
        <button className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
          <img loading="lazy" src="/pics/Arrow.png" className="object-contain w-6 aspect-square" alt="" />
        </button>
        <button className="gap-2 self-stretch px-4 py-2 my-auto text-base font-semibold whitespace-nowrap bg-white shadow-lg rounded-[64px] text-zinc-700">
          Edit
        </button>
      </div>
      <h1 className="mt-8 max-w-full text-3xl font-medium leading-10 text-white w-[296px]">
        Where are you from?
      </h1>
    </header>
        <section className="flex overflow-hidden flex-col flex-1 justify-between pt-8 w-full bg-stone-100 rounded-[32px_32px_0px_0px]">
          <div className="flex overflow-hidden flex-col items-center w-full text-neutral-600">
            {locationInputs.map((input, index) => (
              <LocationInput
                key={index}
                label={input.label}
                value={input.value}
                className={index > 0 ? 'mt-6' : ''}
              />
            ))}
            <div className="flex mt-6 min-h-[88px]" />
          </div>
           <div className="flex flex-col justify-center p-8 w-full text-base text-white whitespace-nowrap bg-stone-100 rounded-[32px]">
      <button
        onClick={onNext}
        className="gap-2 self-stretch px-3 py-5 w-full bg-zinc-700 min-h-[64px] rounded-[32px]"
      >
        Next
      </button>
    </div>
        </section>
      </div>
    </main>
  );
};

export default LocationForm;