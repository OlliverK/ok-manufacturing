const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Hello World!'))

app.post('/signin', (req, res) => {
    var a = JSON.parse(req.body);
    if (a.username === database.users[0].email && a.password === database.secrets.hash) {
      res.send('signed in');
    } else {
      res.json('access denied');
    }
  })

app.listen(3001, () => console.log('Example app listening on port 3001!'))