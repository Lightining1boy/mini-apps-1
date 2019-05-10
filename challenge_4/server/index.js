const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 3001;

app.use(bodyParser.json());
app.use(express.static('client/dist'))







app.listen(PORT, () => {
  console.log('My Server is working on Port', PORT);
})

