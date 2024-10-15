"use client"
import React, { useState } from 'react';

const statesOfIndia = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh','Delhi', 'Goa', 
  'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 
  'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura', 
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

const StateSelector: React.FC = () => {
  const [isSearchActive, setIsSearchActive] = useState(false); // Toggle between select button and search bar
  const [searchQuery, setSearchQuery] = useState(''); // Store search query

  // Filter states based on the search query
  const filteredStates = statesOfIndia.filter(state =>
    state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle state selection
  const handleStateSelect = (state: string) => {
    setSearchQuery(state); // Select the state
    setIsSearchActive(false); // Hide search bar after selection
  };

  return (
    <div className="relative w-full">
      {/* If search is not active, show the "Select State" button */}
      {!isSearchActive && (
        <button 
          onClick={() => setIsSearchActive(true)} // Show search bar when clicked
          className="flex gap-5 justify-between px-4 py-6 w-full rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600"
        >
          <span className="text-neutral-500">Select State</span>
          <img 
            loading="lazy" 
            src="/pics/Down.png" 
            alt="Dropdown icon" 
            className="object-contain shrink-0 w-6 aspect-square" 
          />
        </button>
      )}

      {/* If search is active, show the search bar */}
      {isSearchActive && (
        <div className="relative">
          {/* Input field for searching states */}
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            autoFocus
            className="w-full px-4 py-6 rounded-3xl border border-solid bg-stone-200 border-stone-300 text-neutral-600 focus:outline-none"
            placeholder="Search State"
          />

          {/* Dropdown with filtered states */}
          <div className="absolute mt-2 w-full bg-white border border-stone-300 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            {filteredStates.length > 0 ? (
              filteredStates.map((state, index) => (
                <div 
                  key={index} 
                  onClick={() => handleStateSelect(state)} 
                  className="px-4 py-2 hover:bg-stone-100 cursor-pointer text-neutral-600"
                >
                  {state}
                </div>
              ))
            ) : (
              <div className="px-4 py-2 text-neutral-500">No results found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StateSelector;