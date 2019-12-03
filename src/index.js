const config = require('./config/config');
const cors = require('cors')
const express = require('express')
const bodyParser = require("body-parser")
const userApp = require("./application/userApp")

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello')
})

app.post('/cacheUser', userApp.generateCache);
app.get('/getUser/:u1',userApp.getUser)


app.listen(config.PORT, () => console.log('Estou ouvindo a porta ' + config.PORT));
