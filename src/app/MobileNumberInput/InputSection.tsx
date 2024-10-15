import React from 'react';

interface InputSectionProps {}

const InputSection: React.FC<InputSectionProps> = () => {
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
          />
        </form>
        <p className="mt-3 text-sm leading-5 text-stone-500">
          This is used to create an account in your name on the Haqdarshak app.
        </p>
      </div>
    </section>
  );
};

export default InputSection;