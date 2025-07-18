import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});