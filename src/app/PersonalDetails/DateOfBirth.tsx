import React from 'react';

const DateOfBirth: React.FC = () => {
  return (
    <div className="flex flex-col mt-6 w-full text-base">
      <label htmlFor="dob" className="font-medium text-gray-800">DOB/Age</label>
      <div className="flex gap-2.5 items-center mt-4 w-full text-neutral-600">
        <input
          type="text"
          id="dob"
          className="self-stretch px-4 py-6 my-auto rounded-3xl border border-solid bg-stone-200 border-stone-300 w-[190px]"
          placeholder="Enter your Birthday"
        />
        <span className="self-stretch my-auto text-sm leading-none">OR</span>
        <input
          type="text"
          id="age"
          className="self-stretch px-4 py-6 my-auto whitespace-nowrap rounded-3xl border border-solid bg-stone-200 border-stone-300 w-[66px]"
          placeholder="Age"
        />
      </div>
    </div>
  );
};

export default DateOfBirth;