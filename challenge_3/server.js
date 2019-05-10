const express = require('express');

const app = express();

app.use(express.static('./public'));

const bodyParser = require('body-parser');

const db = require('./db/controller.js');

const PORT = 3000;

app.use(bodyParser.json());
//Put Post request here
app.post('/profiles', (req, res) => {
  console.log('POST data:', req.body);
  db.addAccount(req.body, res, (err, data) => {
      if(err) {
        res.status(500);
        res.send(err);
      }
      res.status(200);
      res.send(data);
    })
})
app.listen(PORT, () => {
  console.log('My Server is listening on port', PORT);
})
