"use client"; // This marks the component as a Client Component

import React from 'react';
import BenefitItem from './BenefitItem';

const benefitsData = [
  {
    text: "Find the benefits that are right for you or your business"
  },
  {
    text: "Learn everything you need to apply"
  },
  {
    text: "Save schemes and track your bookings"
  }
];

const BenefitsComponent: React.FC = () => {
  const handleClick = () => {
    console.log("Get Started button clicked!");
  };

  return (
    <section className="flex overflow-hidden flex-col text-base bg-white max-w-[360px] rounded-[32px]">
      <header className="flex flex-col px-8 pt-20 w-full leading-6 text-white bg-zinc-700">
        <img 
          loading="lazy" 
          src="/pics/1.png" 
          alt="Benefits illustration" 
          className="object-contain self-center max-w-full aspect-[1.9] w-[152px]" 
        />
        <div className="flex z-10 flex-col mt-16 mb-0 w-full">
          {benefitsData.map((benefit, index) => (
            <BenefitItem 
              key={index} 
              text={benefit.text} // Pass only the text prop
            />
          ))}
        </div>
      </header>
      <footer className="flex flex-col pt-72 w-full font-semibold bg-zinc-700 text-zinc-700">
        <div className="flex flex-col justify-center p-8 w-full rounded-[32px]">
          <button 
            className="gap-2 self-stretch px-3 py-5 w-full bg-white min-h-[64px] rounded-[32px]"
            onClick={handleClick} // Attach the click handler
          >
            Get Started!
          </button>
        </div>
      </footer>
    </section>
  );
};

export default BenefitsComponent;