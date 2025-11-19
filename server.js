const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const DATA_FILE = path.join(__dirname, 'responses.json');

async function ensureDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch (err) {
    await fs.writeFile(DATA_FILE, '[]', 'utf8');
  }
}

app.get('/', (req, res) => {
  res.send('Survey submission endpoint. POST JSON to /submit');
});

app.post('/submit', async (req, res) => {
  try {
    const submission = req.body;
    // Basic server-side validation: ensure timestamp + at least one field
    if (!submission || typeof submission !== 'object') {
      return res.status(400).json({ error: 'Invalid submission' });
    }

    await ensureDataFile();
    const raw = await fs.readFile(DATA_FILE, 'utf8');
    const arr = JSON.parse(raw || '[]');
    arr.push(submission);
    await fs.writeFile(DATA_FILE, JSON.stringify(arr, null, 2), 'utf8');

    res.json({ ok: true, saved: true });
  } catch (err) {
    console.error('Failed to save submission', err);
    res.status(500).json({ error: 'Failed to save' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
