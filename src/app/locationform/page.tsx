"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import stateDistrictData from '../data/states-and-districts.json'; // Adjust the path according to your project structure

const LocationForm: React.FC = () => {
  const router = useRouter(); // Initialize useRouter
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [pincode, setPincode] = useState<string>('');
  const [isStateSearchActive, setIsStateSearchActive] = useState<boolean>(false);
  const [isDistrictSearchActive, setIsDistrictSearchActive] = useState<boolean>(false);
  const [stateSearchQuery, setStateSearchQuery] = useState<string>('');
  const [districtSearchQuery, setDistrictSearchQuery] = useState<string>('');

  // Filter districts based on selected state
  const availableDistricts = selectedState
    ? stateDistrictData.states.find(state => state.state === selectedState)?.districts || []
    : [];

  // Filter states based on search query
  const filteredStates = stateDistrictData.states.filter(state =>
    state.state.toLowerCase().includes(stateSearchQuery.toLowerCase())
  );

  // Filter districts based on search query
  const filteredDistricts = availableDistricts.filter(district =>
    district.toLowerCase().includes(districtSearchQuery.toLowerCase())
  );

  // Handle state selection
  const handleStateSelect = (state: string) => {
    setSelectedState(state);
    setIsStateSearchActive(false);
    setDistrictSearchQuery(''); // Reset district search when state changes
    setSelectedDistrict('');
  };

  // Handle district selection
  const handleDistrictSelect = (district: string) => {
    setSelectedDistrict(district);
    setIsDistrictSearchActive(false);
  };

  // Handle pincode change
  const handlePincodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(event.target.value);
  };

  const handleNext = () => {
    // Logic for what happens when the "Next" button is clicked
    console.log({ selectedState, selectedDistrict, pincode });
    // Navigate to MobileInput page
    router.push('/mobileinput'); // Replace with your actual path to the MobileInput page
  };

  return (
    <main className="flex overflow-hidden flex-col justify-center  max-w-[360px] rounded-[32px] bg-[#4f285e] mx-auto">
      <div className="flex flex-col w-full min-h-[800px] relative">
        <header className="flex flex-col p-8 w-full bg-[#4f285e]">
          <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
            <button className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
              <img loading="lazy" src="/pics/Arrow.png" className="object-contain w-6 aspect-square" alt="" />
            </button>
          </div>
          <h1 className="mt-8 max-w-full text-3xl font-medium leading-10 text-white w-[296px]">
            Where are you from?
          </h1>
        </header>

        <section className="flex overflow-hidden flex-col flex-1 justify-between pt-8 w-full bg-stone-100 rounded-[32px_32px_0px_0px]">
          <div className="flex overflow-hidden flex-col items-center w-full text-neutral-600">
            {/* State Selection */}
            <div className="relative w-full mb-6">
              {!isStateSearchActive ? (
                <button 
                  onClick={() => {
                    setIsStateSearchActive(true);
                    setStateSearchQuery(''); // Reset search query when opening dropdown
                  }}
                  className="flex gap-5 justify-between px-4 py-6 w-full rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600"
                >
                  <span className="text-neutral-500">{selectedState || 'Select State'}</span>
                  <img 
                    loading="lazy" 
                    src="/pics/Down.png" 
                    alt="Dropdown icon" 
                    className="object-contain shrink-0 w-6 aspect-square" 
                  />
                </button>
              ) : (
                <input
                  type="text"
                  value={stateSearchQuery}
                  onChange={(e) => setStateSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full px-4 py-6 rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600 focus:outline-none"
                  placeholder="Search State..."
                />
              )}

              {/* Dropdown with filtered states */}
              {isStateSearchActive && (
                <div className="absolute mt-2 w-full bg-white border border-stone-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                  {filteredStates.map((state, index) => (
                    <div 
                      key={index} 
                      onClick={() => handleStateSelect(state.state)} 
                      className="px-4 py-2 hover:bg-stone-100 cursor-pointer text-neutral-600"
                    >
                      {state.state}
                    </div>
                  ))}
                  {filteredStates.length === 0 && (
                    <div className="px-4 py-2 text-neutral-500">No results found</div>
                  )}
                </div>
              )}
            </div>

            {/* District Selection */}
            {selectedState && (
              <div className="relative w-full mb-6">
                {!isDistrictSearchActive ? (
                  <button 
                    onClick={() => {
                      setIsDistrictSearchActive(true);
                      setDistrictSearchQuery(''); // Reset search query when opening dropdown
                    }}
                    className="flex gap-5 justify-between px-4 py-6 w-full rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600"
                  >
                    <span className="text-neutral-500">{selectedDistrict || 'Select District'}</span>
                    <img 
                      loading="lazy" 
                      src="/pics/Down.png" 
                      alt="Dropdown icon" 
                      className="object-contain shrink-0 w-6 aspect-square" 
                    />
                  </button>
                ) : (
                  <input
                    type="text"
                    value={districtSearchQuery}
                    onChange={(e) => setDistrictSearchQuery(e.target.value)}
                    autoFocus
                    className="w-full px-4 py-6 rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600 focus:outline-none"
                    placeholder="Search District..."
                  />
                )}

                {/* Dropdown with filtered districts */}
                {isDistrictSearchActive && (
                  <div className="absolute mt-2 w-full bg-white border border-stone-300 rounded-lg shadow-lg z-10 max-h-40 overflow-y-auto">
                    {filteredDistricts.map((district, index) => (
                      <div 
                        key={index} 
                        onClick={() => handleDistrictSelect(district)} 
                        className="px-4 py-2 hover:bg-stone-100 cursor-pointer text-neutral-600"
                      >
                        {district}
                      </div>
                    ))}
                    {filteredDistricts.length === 0 && (
                      <div className="px-4 py-2 text-neutral-500">No results found</div>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Pincode Input */}
            {selectedDistrict && (
              <div className={`flex flex-col justify-center px-4 py-6 max-w-full rounded-3xl border border-solid bg-stone-200 border-stone-400 min-h-[88px] w-full`}>
                <div className="flex flex-1 size-full">
                  <div className="flex flex-col flex-1 shrink basis-0">
                    <label className="text-xs">Pincode</label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={handlePincodeChange}
                      className="w-full h-full border-none bg-transparent focus:outline-none"
                      placeholder="Enter Pincode"
                    />
                  </div>
                </div>
              </div>
            )}

            <div className="flex mt-6 min-h-[88px]" />
          </div>

          <div className="flex flex-col justify-center p-8 w-full text-base text-white whitespace-nowrap bg-stone-100 rounded-[32px]">
            <button
              onClick={handleNext}
              className="gap-2 self-stretch px-3 py-5 w-full bg-zinc-700 min-h-[56px] rounded-3xl border border-solid border-zinc-700 shadow-lg"
            >
              <span className="text-white">Next</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default LocationForm;