const express  = require('express'); //we get function here
const app = express(); //instance of our entire application

app.get('/',(req,res)=>{
    res.send("Welcome to root route nodemon");
});

app.get('/home',(req, res)=>{
    res.send('<h1> Balle Balle</h1>');
});


const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`Server connected at port: ${PORT}`);
});