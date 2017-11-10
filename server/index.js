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

// shelf
app.get('/api/shelf/:id', shelf_controller.getBins );
// bins 
app.get('/api/bin/:id', shelf_controller.getBin)
app.put('/api/bin/:id', shelf_controller.updateBin) //takes object with productName, price, imgurl
app.delete('/api/bin/:id', shelf_controller.deleteBin)
app.post('/api/bin/:id', shelf_controller.createBin) //takes obj with productName, price, imgurl, shelfId


const port = process.env.PORT || 3000;
app.listen(port, ()=> {console.log(`Server listening on port ${port}.`)})