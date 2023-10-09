const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

app.use(express.json());

// Middleware for CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.post('/send-email', (req, res) => {
  const { name, email, message, recipients } = req.body;


  if (!name || !email || !message || !recipients || recipients.length === 0) {
    return res.status(400).send('Bad Request: Name, email, message, and at least one recipient are required.');
  }

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients,
    subject: 'New message from DevDynamos',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent:', info.response);
      return res.status(200).send('Email sent successfully');
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
