
// let x = process.argv[3];
// for(let i = 0; i<x; i++){
//     console.log(process.argv[2]);
    
// }

// let neww =  process.argv.slice(2);
// for(let i = 1; i<=neww[1]; i++){
//     console.log(neww[0]);
    
// }

let num = process.argv.pop();
let c3 = 1;
let c5 = 1;

for(let i = 1; i<=num; i++){
    let str = "";
  
    if(c3 === 3){
        str += "fizz";
        c3 = 0;
    }
    if(c5 === 5){
        str +="buzz";
        c5 = 0;
    }
    if(str==""){
        str += i;
    }
    
    c3++;
    c5++;
    console.log(str);
}

// for(let i = 1; i<=num; i++){
     
//     if(i%3 == 0 && i%5 == 0){
//         console.log("fizzbuzz");
//     }
//     else if(i%3 == 0){
//         console.log("fizz");
//     }
//     else if(i%5 == 0){
//         console.log("buzz");
//     }
//     else{
//         console.log(i);
        
//     }

// }
