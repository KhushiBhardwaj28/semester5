const express = require('express');
const app = express();
const path = require('path');

const blogs = [
    {
        id :1,
        author: "Sam Vohra",
        comment: "Pd lete h"
    }, 
    {
        id: 2,
        author: "Khushi Bh",
        comment: "Positivity"

    }, 
    {
        id: 3,
        author: "Bhoomika",
        comment: "Waiting for others"
    },
    {
        id: 4,
        author: "Kumari",
        comment: "Pyaari samajh gyi"
    }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//middleware for serving static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }))

//root route
app.get('/', (req,res)=>{
    res.send("hello");
});


// let pswd = 80;
// app.use('/blogs',(req,res,next)=>{
//     if(pswd === 800){
//         next();
//     }
//     else{
//         res.send("Sorry nhi ho paega")
//     }
// })

// app.get('/home/bye', (req,res)=>{
//     res.send("hello from root route");
// })


//CRUD

//create
//-----form
app.get('/blogs/new',(req,res)=>{
    res.render('blogs/new');
})
app.post('/blogs', (req,res)=>{
    let {author, comment} = req.body;
    blogs.push({id: blogs.length+1 ,author,comment});
    // res.send("blog created successfully");
    res.redirect('/blogs');
})
 
//read
app.get('/blogs',(req,res)=>{
    res.render('blogs/index', {blogs});
})

 
//update
//delete






app.listen(8080, ()=>{
    console.log("server connected at port 8080");
})