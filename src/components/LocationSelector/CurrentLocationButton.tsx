import React from 'react';

const CurrentLocationButton: React.FC = () => {
  return (
    <button className="flex gap-2 items-start px-6 py-4 mt-8 w-full font-semibold text-center bg-white rounded-3xl shadow-lg">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a6c24fc506a089203caa5ac4b74f7555710b9c38e145c46811113eea0b74aa98?placeholderIfAbsent=true&apiKey=a8de33e955f64fd899e65d7a7a670ce6" alt="" className="object-contain shrink-0 w-6 aspect-square" />
      <span>Use current location</span>
    </button>
  );
};

export default CurrentLocationButton;