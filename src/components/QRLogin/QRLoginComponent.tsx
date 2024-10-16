import React from 'react';

const QRLoginComponent: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-white max-w-[360px] rounded-[32px]">
      <div className="flex flex-col w-full min-h-[696px]">
      <header className="flex gap-10 justify-between items-center px-8 py-9 w-full bg-rose-100 min-h-[93px]">
      <img loading="lazy" src="/pics/Arrow.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <img loading="lazy" src="/pics/Torch.png" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
    </header>

    <section className="flex flex-col items-center p-2.5 w-full bg-rose-100 min-h-[476px] max-sm:mr-9">
      <h2 className="text-base font-semibold leading-6 text-center text-zinc-700">
        Scan QR from Yojana Card to login
      </h2>
      <div className="flex gap-2.5 justify-center items-center mt-2.5 bg-white rounded-xl border-4 border-pink-500 border-solid h-[194px] min-h-[194px] w-[194px]">
        <img loading="lazy" src="/pics/QR.png" alt="QR Code" className="object-contain self-stretch my-auto rounded-lg aspect-square w-[164px]" />
      </div>
      <button className="gap-2 px-3.5 py-2 mt-2.5 text-xs font-medium text-center bg-white shadow-lg rounded-[32px] text-zinc-700">
        Upload Image from Gallery
      </button>
    </section>

        <section className="flex relative flex-col px-8 py-5 -mt-px w-full text-base font-semibold bg-stone-100 min-h-[140px] rounded-[32px] z-[1]">
        <div className="flex gap-8 justify-center items-center w-full text-center whitespace-nowrap text-zinc-700">
      <div className="flex-1 shrink self-stretch my-auto h-px border border-solid basis-0 bg-neutral-200 border-neutral-200 w-[105px]" />
      <div className="self-stretch my-auto">{'OR'}</div>
      <div className="flex-1 shrink self-stretch my-auto h-px border border-solid basis-0 bg-neutral-200 border-neutral-200 w-[104px]" />
    </div>

    <button className="gap-2 self-center px-3 py-5 mt-2.5 max-w-full text-white bg-zinc-700 min-h-[64px] rounded-[32px] w-[296px]">
      {'Use Phone Number'}
    </button>
        </section>
      </div>
    </main>
  );
};

export default QRLoginComponent;