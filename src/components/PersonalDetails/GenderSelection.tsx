import React from 'react';

const genderOptions = ['Male', 'Female', 'Other'];

const GenderSelection: React.FC = () => {
  return (
    <div className="flex flex-col mt-6 w-full max-w-[296px]">
      <fieldset>
        <legend className="text-base font-medium text-gray-800">Gender</legend>
        <div className="flex gap-9 items-start mt-4">
          {genderOptions.map((gender) => (
            <div key={gender} className="flex gap-2 items-center rounded">
              <input
                type="radio"
                id={gender.toLowerCase()}
                name="gender"
                className="w-6 h-6 rounded-full border border-solid bg-stone-200 border-stone-300"
              />
              <label htmlFor={gender.toLowerCase()} className="self-stretch my-auto text-sm leading-none text-neutral-600">
                {gender}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default GenderSelection;