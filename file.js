 const fs=require("fs");
 const quote2="Live more,worry less";



// console.log(process.argv);
// const[ , ,noOfFiles]=process.argv;

// for(let i=1;i<=noOfFiles;i++){
//     fs.writeFile(`./backup/test-${i}.html`,quote2,(err)=>{
//         //console.log(err);
//         console.log(`completed writing text-${i}.html`);
//     });  
// }


// fs.readFile('./cool1.txt',"utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
    
// });


fs.unlink("./delete.css",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(`deleted `);
    }

})

// fs.appendFile("./nice.txt","\n"+quote2,(err)=>{
//             //console.log(err);
//             console.log(`completed writing`);
//         }); 
