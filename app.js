const express = require('express');
const app = express();
const multer = require('multer');
const storage = multer.memoryStorage();
const uploadFile = multer({ storage });
const fs = require('fs');
const path = require('path');

app.post('/', uploadFile.single('file'), async function(req, res) {
  fs.writeFileSync(path.join(__dirname, req.file.originalname), req.file.buffer);
  res.send('OK');
});

app.listen(8080);
