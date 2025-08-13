
const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let arr = [5,6,7,8];

app.get('/', (req,res)=>{
    res.send("Welcome to root route");
});

app.get('/samarth', (req,res)=>{
    // res.send("Welcome Samarth");
    res.render('products/index', {arr})
});



// app.get('*', (req,res)=>{
//     res.send("Invalid route");
// })

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log(`SERVER CONNECTED AT PORT: ${PORT}`);
    
});