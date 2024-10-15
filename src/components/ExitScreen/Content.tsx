import React from 'react';

interface ContentProps {
  successMessage: string;
}

const Content: React.FC<ContentProps> = ({ successMessage }) => {
  return (
    <section className="flex flex-col px-16 pt-16 pb-72 w-full text-base font-semibold leading-6 text-center bg-zinc-700">
      <p className="-mb-14 opacity-60">{successMessage}</p>
    </section>
  );
};

export default Content;