import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendOTP = () => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleSendOTP = () => {
        axios
            .post('http://localhost:3001/send-otp', { phoneNumber })
            .then((response) => {
                if (response.data.success) {
                    toast.success('OTP sent successfully');
                } else {
                    toast.error('Failed to send the OTP');
                }
            })
            .catch((error) => {
                console.error(error);
                toast.error('Failed to send OTP');
            });
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>OTP Verification</h1>
            <label>
                Phone Number:
                <input
                    type="text"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
            </label>
            <br />
            <Link href="/verify-otp">
                <button onClick={handleSendOTP}>Send OTP</button>
            </Link>
            <ToastContainer />
        </div>
    );
};

export default SendOTP;
