const express = require('express');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 8080;

// Serve static files
app.use(express.static(path.join(__dirname, 'dist', 'launch-edge-frontend','browser')));

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,   'dist', 'launch-edge-frontend', 'browser', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});