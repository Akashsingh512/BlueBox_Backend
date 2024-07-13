import express from 'express';
// require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;
app.get('/', (req, res) =>{
    res.send("Hellomini")
});

app.get('/login' , (req, res) => {
    res.send("its login page")
})

app.listen (port, () => {
    console.log(`its on ${port}`);
});