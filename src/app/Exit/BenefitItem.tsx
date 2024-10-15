"use client"
import React, { useState, useEffect } from 'react';

interface BenefitItemProps {
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ text }) => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading for 3 seconds, then show the tick mark
    const timer = setTimeout(() => {
      setLoading(false);
      setLoaded(true);
    }, 3000); // 3 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex gap-3 items-center mt-7 w-full">
      {/* Conditionally show either the loading spinner or tick mark */}
      <div className="w-8 h-8 flex items-center justify-center">
        {loading ? (
          // Loading spinner
          <div className="animate-spin w-6 h-6 border-4 border-t-transparent border-gray-500 rounded-full"></div>
        ) : loaded ? (
          // Tick mark after loading
          <span className="text-green-500 text-2xl">✔</span>
        ) : null}
      </div>
      {/* Benefit text */}
      <p className="flex-1 shrink self-stretch my-auto basis-0">
        {text}
      </p>
    </div>
  );
};

export default BenefitItem;