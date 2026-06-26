const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve statiske filer (index.html, og eventuelle senere tilføjelser)
app.use(express.static(path.join(__dirname, 'public')));

// Hvis nogen går direkte til roden, send index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`⭐ Fang Stjernen serveren kører på http://localhost:${PORT}`);
});
