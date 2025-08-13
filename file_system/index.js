const { log } = require('console');
const fs = require('fs');
// console.log(path.join('sam','vohra','maverick','dog'));
// let data = "namaste ji ki haal chal copy to all"; 
// // write
// fs.writeFile('sam.txt', data, {
//     encoding:  "utf-8",
//     flag: 'w'
// }, (err)=>{
//     if(err){throw err}
//     console.log("file created successfully");
    
// });

//read
// fs.readFile('sam.txt',{
//     // encoding:  "utf-8",
//     // flag: 'r'
// },(err,data)=>{
//     if(err){ throw err }
//     console.log(data.toString());
    
// })

//update
// fs.appendFile('sam.txt', 'mai nhi bta rhi',(err)=>{
//     if(err){throw err}
//     console.log("data edited successfully");
    
// })

//delete
fs.unlink('sam.txt', (err)=>{
    if(err){ throw err}
    console.log("deleted successfully");
    
})
