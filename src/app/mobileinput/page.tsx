// pages/mobile-input.tsx
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

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

interface InputSectionProps {
  onNextClick: () => void;
}

const InputSection: React.FC<InputSectionProps> = ({ onNextClick }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setButtonVisible(value.length > 0);
  };

  return (
    <section className="flex overflow-hidden flex-col flex-1 items-center pt-8 w-full bg-stone-100 rounded-[32px_32px_0px_0px]">
      <div className="flex flex-col items-center max-w-full w-[296px]">
        <form>
          <label htmlFor="mobileNumber" className="sr-only">Enter mobile number</label>
          <input
            id="mobileNumber"
            type="tel"
            className="px-4 py-6 w-full text-base rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600"
            placeholder="Enter mobile number"
            aria-label="Enter mobile number"
            onChange={handleInputChange}
          />
        </form>
        <p className="mt-3 text-sm leading-5 text-stone-500">
          This is used to create an account in your name on the Haqdarshak app.
        </p>
        {isButtonVisible && (
          <button 
            className="gap-2 self-stretch px-3 py-5 w-full bg-[#4f285e] min-h-[64px] rounded-[32px] mt-4" 
            onClick={onNextClick} 
          >
            Next
          </button>
        )}
      </div>
    </section>
  );
};

interface MobileNumberInputProps {
  previousPage: 'locationform' | 'login';  
}

const MobileNumberInput: React.FC<MobileNumberInputProps> = ({ previousPage }) => {
  const router = useRouter();

  const handleNextClick = () => {
    console.log(`Navigating from: ${previousPage}`);
    router.push('/otpverify');
  };

  return (
    <main className="flex overflow-hidden flex-col justify-center  max-w-[360px] rounded-[32px] mx-auto">
      <div className="flex flex-col w-full min-h-[800px] bg-[#4f285e]">
        <header className="flex flex-col p-8 w-full bg-[#4f285e] max-sm:mr-0">
          <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
            <IconButton icon="/pics/Arrow.png" alt="Back" />
          </div>
          <h1 className="mt-8 text-3xl font-medium leading-10 text-white">
            How do you want to login?
          </h1>
        </header>
        <InputSection onNextClick={handleNextClick} />
      </div>
    </main>
  );
};

export default MobileNumberInput;