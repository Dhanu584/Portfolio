// 1. Import Dependencies
require('dotenv').config(); // Loads environment variables from .env file
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

// 2. Setup App and Middleware
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allows cross-origin requests (from your React app)
app.use(express.json()); // Allows the server to parse JSON in the request body

// 3. Define the API route that your React form will post to
app.post('/api/send-message', async (req, res) => {
  // Destructure the form data from the request body
  const { name, email, subject, message } = req.body;

  // --- Nodemailer Transport Setup ---
  // This is the service that will send the email
  const transporter = nodemailer.createTransport({
    service: 'gmail', // We are using Gmail
    auth: {
      user: process.env.EMAIL_USER, // Your email from .env file
      pass: process.env.EMAIL_PASS, // Your App Password from .env file
    },
  });

  // --- Mail Options ---
  // This is the email that will be sent
  const mailOptions = {
    from: `"${name}" <${email}>`, // Sender's name and email (from the form)
    to: process.env.EMAIL_USER, // The email address you want to receive messages on (your own)
    subject: `New Contact Form Submission: ${subject}`, // Subject line of the email
    html: `
      <h2>New Message from Portfolio Contact Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
    `,
  };

  // --- Sending the Email ---
  try {
    await transporter.sendMail(mailOptions);
    // If successful, send a success response to the frontend
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    // If an error occurs, send an error response
    res.status(500).json({ error: 'Failed to send message.' });
  }
});

// 4. Start the Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});