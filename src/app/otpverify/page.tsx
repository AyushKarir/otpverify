"use client";
import React, { useState, useRef, useEffect } from "react";

// OTPInput Component
const OTPInput: React.FC<{ otp: string[]; setOtp: React.Dispatch<React.SetStateAction<string[]>> }> = ({ otp, setOtp }) => {
  const inputRefs = useRef<HTMLInputElement[]>([]); // Array of refs for the inputs

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = e.target;
    if (/^[0-9]$/.test(value) || value === "") {
      // Update OTP array with the current input
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move to the next input if a digit is entered
      if (value && index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (e.key === "Backspace") {
      // Clear the current input and move to the previous input if necessary
      const newOtp = [...otp];
      if (!newOtp[index] && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  return (
    <div className="flex gap-2 w-full min-h-[70px]">
      {otp.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          ref={(el) => {
            inputRefs.current[index] = el as HTMLInputElement; // Store the ref without returning anything
          }}
          value={digit}
          className="flex shrink-0 rounded-3xl border border-solid bg-stone-200 border-stone-200 h-[69px] w-[68px] text-center text-2xl text-black"
          aria-label={`OTP digit ${index + 1}`}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

// ResendCode Component
const ResendCode: React.FC<{ timer: string; resendOtp: () => void; disableResend: boolean }> = ({ timer, resendOtp, disableResend }) => {
  return (
    <div className="flex gap-3 justify-center items-start mt-4 w-full">
      <div className="flex flex-col min-w-[240px] w-[290px]">
        <p className="text-xs text-stone-500">
          We have sent an OTP to your mobile number
        </p>
        <p className="text-base text-zinc-700">
          {disableResend ? `Resend code in ${timer}` : (
            <button className="text-blue-500" onClick={resendOtp}>
              Resend OTP
            </button>
          )}
        </p>
      </div>
    </div>
  );
};

// OTPVerification Component
const OTPVerification: React.FC<{ title: string }> = ({ title }) => {
  const [otp, setOtp] = useState<string[]>(["", "", "", ""]);
  const [otpEntered, setOtpEntered] = useState(false);
  const [timer, setTimer] = useState(60); // Timer set for 3 minutes (in seconds)
  const [disableResend, setDisableResend] = useState(true);

  // Timer countdown
  useEffect(() => {
    let countdown: NodeJS.Timeout;
    if (otpEntered) {
      countdown = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            setDisableResend(false); // Enable resend when timer hits zero
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(countdown); // Clear interval on unmount
  }, [otpEntered]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleNextClick = () => {
    setOtpEntered(true); // Start the timer
    setOtp(["", "", "", ""]); // Clear the OTP input
    setDisableResend(true); // Disable resend until timer runs out
    setTimer(60); // Reset timer
  };

  const resendOtp = () => {
    setOtpEntered(false); // Reset entered state
    setDisableResend(true); // Disable resend until timer runs out
    setTimer(60); // Reset timer
    // Simulate OTP resend (e.g., call API to resend OTP)
    console.log("Resending OTP to the same number...");
  };

  return (
    <section className="flex flex-col items-center w-full h-screen max-w-[360px] mx-auto rounded-[32px] bg-[#4f285e]">
      <header className="flex flex-col p-8 w-full bg-[#4f285e] rounded-t-[32px]">
        <div className="flex gap-10 justify-between items-center w-full max-w-[296px]">
          <div className="flex gap-2 items-start self-stretch px-4 py-2 my-auto w-14 bg-white shadow-lg rounded-[64px]">
            <img
              loading="lazy"
              src="/pics/Arrow.png"
              className="object-contain w-6 aspect-square"
              alt=""
            />
          </div>
        </div>
        <h1 className="mt-8 max-w-full text-3xl font-medium text-white w-[296px]">
          What is the OTP?
        </h1>
      </header>
      <main className="flex flex-col flex-1 items-center w-full bg-stone-100 px-6 py-8 rounded-[32px] h-full">
        <div className="flex flex-col max-w-full w-[296px]">
          <OTPInput otp={otp} setOtp={setOtp} />
          {otpEntered && (
            <ResendCode
              timer={formatTime(timer)}
              resendOtp={resendOtp}
              disableResend={disableResend}
            />
          )}
          <button
            className="gap-2 self-stretch px-3 py-5 w-full bg-[#4f285e] min-h-[64px] rounded-[32px] mt-6 text-white"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </main>
    </section>
  );
};

// Main Page Component
const Page: React.FC = () => {
  return <OTPVerification title="OTP Verification" />;
};

export default Page;