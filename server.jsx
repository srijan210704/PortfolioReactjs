const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ss7697@srmist.edu.in', 
      pass: 'Sr@#@#21' 
    }
  });

  const mailOptions = {
    from: email,
    to: 'ss7697@srmist.edu.in', 
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ error: 'Failed to send message' });
    }
    res.status(200).json({ success: true });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
