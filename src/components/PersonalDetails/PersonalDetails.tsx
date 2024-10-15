import React from 'react';
import Header from './Header';
import InputField from './InputField';
import GenderSelection from './GenderSelection';
import DateOfBirth from './DateOfBirth';

const PersonalDetails: React.FC = () => {
  return (
    <main className="flex flex-col max-w-[360px]">
      <Header />
      <section className="flex overflow-hidden flex-col flex-1 items-center pt-8 w-full bg-stone-100 rounded-[32px_32px_0px_0px]">
        <div className="flex flex-col max-w-full w-[296px]">
          <InputField label="Name" placeholder="Enter your Full Name" />
          <hr className="w-full mt-6 border-t border-stone-200" />
          <GenderSelection />
          <hr className="w-full mt-6 border-t border-stone-200" />
          <DateOfBirth />
          <p className="mt-6 text-sm leading-5 text-stone-500">
            This information helps us suggest schemes that are right for you.
          </p>
        </div>
      </section>
    </main>
  );
};

export default PersonalDetails;