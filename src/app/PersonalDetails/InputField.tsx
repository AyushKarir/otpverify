import React from 'react';

interface InputFieldProps {
  label: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col w-full text-base">
      <label htmlFor={label.toLowerCase()} className="font-medium text-gray-800">
        {label}
      </label>
      <input
        type="text"
        id={label.toLowerCase()}
        className="px-4 py-6 mt-4 w-full rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;