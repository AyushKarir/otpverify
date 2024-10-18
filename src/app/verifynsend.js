const express = require("express");
const bodyparser = require("body-parser");
const twilio = require("twilio");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient(); // Initialize Prisma Client

const app = express();
const port = 3001;

app.use(bodyparser.json());
app.use(cors());

const accountSID = "ACa1bd209224e597e1840b1dd9a132797f";
const authToken = "de3e56c96c5fb5dbcd7eeb60ba96be74";
const client = new twilio(accountSID, authToken);

// Function to generate a random 6-digit OTP
const generateOtp = () => {
    return Math.floor(1000 + Math.random() * 9000);
};

// API endpoint to initiate OTP generation and send to user's phone
app.post("/send-otp", async (req, res) => {
    const { phoneNumber } = req.body;
    const otp = generateOtp();

    try {
        // Save OTP in the PostgreSQL database using Prisma
        const otpRecord = await prisma.otp.create({
            data: {
                phoneNumber: phoneNumber,
                otp: otp.toString(),
            },
        });

        // Send OTP via Twilio
        await client.messages.create({
            body: `Your OTP is ${otp}`,
            from: "+19093655548", // Your Twilio number
            to: phoneNumber,
        });

        res.send({ success: true, otp: otpRecord.otp });
    } catch (err) {
        console.error(err);
        res.status(500).send({ success: false, error: "Failed to send OTP" });
    }
});

// API Endpoint to verify the OTP and create a new user
app.post("/verify-otp", async (req, res) => {
    const { phoneNumber, userOTP } = req.body;

    console.log("Received phoneNumber:", phoneNumber);  // Debug: Log input
    console.log("Received userOTP:", userOTP);          // Debug: Log input

    try {
        // Retrieve OTP from the database using Prisma
        const otpRecord = await prisma.otp.findFirst({
            where: {
                phoneNumber: phoneNumber.trim(), // Remove any leading/trailing spaces
                otp: userOTP.trim(),             // Remove any leading/trailing spaces
            },
        });

        console.log("OTP Record:", otpRecord);  // Debug: Log the record

        if (otpRecord) {
            // Create a new user in the database with Prisma after OTP verification
            const newUser = await prisma.user.create({
                data: {
                    phone: phoneNumber.trim(),
                    name: "New User", // Set name or other details as required
                    district: "Unknown", // Set as needed
                    state: "Unknown",    // Set as needed
                    pincode: "000000",   // Default pincode
                    isVerified: true,    // Mark user as verified
                },
            });

            res.send({ success: true, user: newUser });
        } else {
            console.log("Invalid OTP or phone number."); // Debug: Add more information
            res.status(401).send({ success: false, error: "Invalid OTP" });
        }
    } catch (error) {
        console.error("Error during OTP verification:", error); // Debug: Log full error
        res.status(500).send({ success: false, error: "Error verifying OTP" });
    }
});

app.post("/save-location", async (req, res) => {
    const { state, district, pincode } = req.body;

    console.log('Received Data:', req.body); // Log incoming data

    try {
        const newUser = await prisma.user.create({
            data: {
                state: state,
                district: district,
                pincode: pincode,
                name: "",
                isVerified: true,
            },
        });

        res.send({ success: true, user: newUser });
    } catch (error) {
        console.error("Error saving location details:", error); // Log detailed error
        res.status(500).send({ success: false, error: "Failed to save location details" });
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});









// const mongoURI = "mongodb://localhost:27017/phoneotp";
// const accountSID = "ACa1bd209224e597e1840b1dd9a132797f";
// const authToken = "43d141d075400d7504aaffb0a6644cba";
// const client = new twilio(accountSID, authToken);
// from: "+19093655548",


// const express = require("express");
// const bodyparser = require("body-parser");
// const twilio = require("twilio");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// const port = 3001;

// app.use(bodyparser.json());
// app.use(cors());

// const mongoURI = "mongodb://localhost:27017/phoneotp";
// const accountSID = "ACa1bd209224e597e1840b1dd9a132797f";
// const authToken = "43d141d075400d7504aaffb0a6644cba";
// const client = new twilio(accountSID, authToken);

// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// const otpSchema = new mongoose.Schema({
//     phoneNumber: String,
//     otp: String,
// });

// const OtpModel = mongoose.model("Otp", otpSchema);

// // Function to generate a random 6-digit OTP
// const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000);
// };

// // API endpoint to initiate OTP generation and send to user's phone
// app.post("/send-otp", async (req, res) => {
//     const { phoneNumber } = req.body;
//     const otp = generateOtp();

//     const otpDocument = new OtpModel({ phoneNumber, otp });
//     await otpDocument.save();

//     try {
//         await client.messages.create({
//             body: `Your OTP is ${otp}`,
//             from: "+19093655548", // Your Twilio number
//             to: phoneNumber,
//         });
//         res.send({ success: true, otp: otp });
//     } catch (err) {
//         console.error(err);
//         res.status(500).send({ success: false, error: "Failed to send OTP" });
//     }
// });

// // API Endpoint to verify the OTP
// app.post("/verify-otp", async (req, res) => {
//     const { phoneNumber, userOTP } = req.body;

//     try {
//         const otpDocument = await OtpModel.findOne({ phoneNumber, otp: userOTP });

//         if (otpDocument) {
//             res.send({ success: true });
//         } else {
//             res.status(401).send({ success: false, error: "Invalid OTP" });
//         }
//     } catch (error) {
//         console.error(error);
//         res.status(500).send({ success: false, error: "Error verifying OTP" });
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });























