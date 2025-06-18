const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Backend is working');
});

app.post('/api/register', (req, res) => {
  console.log(req.body);
  res.json({ message: 'Registered successfully' });
});

app.post('/api/login', (req, res) => {
  res.json({ message: 'Login successful' });
});

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
