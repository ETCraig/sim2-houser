const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session')
require('dotenv').config();

const app = express();
const ctrl = require('./Controller');


app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true
// }));

massive(process.env.CONNECTION_STRING).then(dbInstance =>{
    dbInstance.seedFile()
    .then(res => console.log('Seed successful'))
    .catch(err => console.log('Seed not successful', err))
  
    app.set('dbInstance', dbInstance);
  
}).catch(err => console.log(err))

app.post('/api/auth/login', ctrl.userLogin)
app.post('/api/auth/register', ctrl.userReg)
// app.post('/api/auth/logout', ctrl.userLogout)
// app.post('/api/properties', ctrl.createProperty)
// app.get('/api/properties', ctrl.getProperties)
// app.delete('/api/properties/:id', ctrl.delProperty)

const port = process.env.PORT || 3200;
app.listen(port, () => {console.log(`Listening and Oporating on: ${port}`)});