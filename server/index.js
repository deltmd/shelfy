const express = require('express')
      bodyParser = require('body-parser')
      cors = require('cors')
      massive = require('massive')
      shelf_controller = require('./controllers/shelf_controller.js')
      require('dotenv').config()

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(db => app.set('db', db));

app.get('/api/shelves/:id', shelf_controller.getBins );
app.get('/api/test', shelf_controller.testFn);


const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`Server listening on port ${port}.`)})