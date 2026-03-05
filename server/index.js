const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const SUBMISSIONS_FILE = path.join(__dirname, 'submissions.json');

app.use(cors());
app.use(bodyParser.json());

// Initialize submissions file if it doesn't exist
if (!fs.existsSync(SUBMISSIONS_FILE)) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
}

app.get('/', (req, res) => {
  res.send('Island Hands API is running.');
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;
  
  // Validation
  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Please provide name, email, and service type.' });
  }

  const newSubmission = {
    id: Date.now(),
    name,
    email,
    phone,
    service,
    message,
    timestamp: new Date().toISOString()
  };

  try {
    const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf8');
    const submissions = JSON.parse(data);
    submissions.push(newSubmission);
    fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
    
    // Log to console (as requested in MVP)
    console.log('New Contact Form Submission:', newSubmission);
    res.status(201).json({ message: 'Submission received successfully!' });
  } catch (err) {
    console.error('Error saving submission:', err);
    res.status(500).json({ error: 'Failed to save submission.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
