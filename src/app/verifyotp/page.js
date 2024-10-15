'use client';

import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const VerifyOTP = () => {
    const [otp, setOtp] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSendOTP = async () => {
        try {
            const response = await axios.post('http://localhost:3001/verify-otp', { phoneNumber, userOTP: otp });
            if (response.data.success) {
                toast.success('OTP verified successfully');
            } else {
                toast.error('Invalid OTP');
            }
        } catch (error) {
            console.error(error);
            toast.error('Error verifying OTP');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>Verify OTP</h1>
            <label>
                Phone Number:
                <input
                    type="text"
                    className='text-black'
                    value={phoneNumber}
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            </label>
            <label>
                OTP:
                <input
                    type="text"
                    className='text-black'
                    value={otp}
                    onChange={e => setOtp(e.target.value)}
                />
            </label>
            <button onClick={handleSendOTP}>Verify OTP</button>
            <ToastContainer />
        </div>
    );
};

export default VerifyOTP;
