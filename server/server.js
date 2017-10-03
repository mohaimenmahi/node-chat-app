const path = require('path');
const express = require('express');

const pathPublic = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(pathPublic));

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});
