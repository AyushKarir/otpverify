const express = require("express");
const bodyparser = require("body-parser");
const twilio = require("twilio");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3001;

app.use(bodyparser.json());
app.use(cors());

const mongoURI = "mongodb://localhost:27017/phoneotp";
const accountSID = "ACa1bd209224e597e1840b1dd9a132797f";
const authToken = "c5dcc05bf5e82d9fcf7e9cd0c85ecfbe";
const client = new twilio(accountSID, authToken);

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const otpSchema = new mongoose.Schema({
    phoneNumber: String,
    otp: String,
});

const OtpModel = mongoose.model("Otp", otpSchema);

// Function to generate a random 6-digit OTP
const generateOtp = () => {
    return Math.floor(100000 + Math.random() * 900000);
};

// API endpoint to initiate OTP generation and send to user's phone
app.post("/send-otp", async (req, res) => {
    const { phoneNumber } = req.body;
    const otp = generateOtp();

    const otpDocument = new OtpModel({ phoneNumber, otp });
    await otpDocument.save();

    try {
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: "+19093655548", // Your Twilio number
            to: phoneNumber,
        });
        res.send({ success: true, otp: otp });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, error: "Failed to send OTP" });
    }
});

// API Endpoint to verify the OTP
app.post("/verify-otp", async (req, res) => {
    const { phoneNumber, userOTP } = req.body;

    try {
        const otpDocument = await OtpModel.findOne({ phoneNumber, otp: userOTP });

        if (otpDocument) {
            res.send({ success: true });
        } else {
            res.status(401).send({ success: false, error: "Invalid OTP" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, error: "Error verifying OTP" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
