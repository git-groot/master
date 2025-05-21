const express = require('express');
const cors =require('cors')
const connectDB = require('./db.config');
const port = 3000;
const app = express();
app.use(cors())


connectDB();
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});