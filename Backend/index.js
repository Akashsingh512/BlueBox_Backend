import express, { query } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bodyParser from 'body-parser';
import { connect } from 'http2';
import  connectDB  from './database.js';
import mongoose, { Mongoose } from 'mongoose';
import createUserSchema from './custmerData.js';


dotenv.config({
    path: './env'
});
const __dirname = path.dirname(new URL(import.meta.url).pathname);
const port = process.env.PORT || 3000;
const app = express();

// app and use request and response

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// mongoose connection
connectDB();

createUserSchema();
// const users = mongoose.model('data', userSchema);
const users = mongoose.model('data', createUserSchema());


// route request and response





app.get('/cart', (req, res) =>{
    res.sendFile(__dirname + '/cart.html');
});

// app.post('/form-submit', (req, res) =>{
//     res.send(req.body);
// });

app.post('/form-submit', async (req, res) =>{
const customerData = new users({
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    city: req.body.city

});
await customerData.save();
res.redirect('/cart');
console.log(customerData);
});






// listining to the port

app.listen (port, () => {
    console.log(`its on ${port}`);
});