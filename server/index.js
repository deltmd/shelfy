const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const shelf_controller = require('./controllers/shelf_controller.js');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
massive(process.env.CONNECTION_STRING).then(datab => app.set('datab', datab));

app.get('/api/shelves/:id', shelf_controller.getBins );
app.get('/api/test', shelf_controller.testFn);


const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`Server listening on port ${port}.`)})