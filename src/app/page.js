'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const router = useRouter(); // Initialize useRouter

    const handleSendOTP = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await axios.post('http://localhost:3001/send-otp', { phoneNumber });
            if (response.data.success) {
                toast.success('OTP sent successfully');
                // Redirect to the verify OTP page after sending the OTP
                router.push('/verifyotp'); // Navigate to the verify OTP page
            } else {
                toast.error('Failed to send the OTP');
            }
        } catch (error) {
            console.error(error);
            toast.error('Failed to send OTP');
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1>OTP Verification</h1>
            <form onSubmit={handleSendOTP}>
                <label>
                    Phone Number:
                    <input
                        type="text"
                        className="text-black"
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                </label>
                <button type="submit">Send OTP</button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default Home;
