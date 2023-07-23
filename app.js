const client = require('./server');


// client.query(`select * from emp`,(err,result)=>{
//     if(!err){
//         console.log(result.rows);
//     }
//     client.end();
// })

// const query = async () => {
//    await client.connect();

//     client.query(`select * from emp`,(err,result)=>{
//     if(!err){
//         console.log(result.rows);
//     }
//     client.end();
// })

// }
// query();

// (async () => {
//     await client.connect();
 
//      client.query(`select * from emp`,(err,result)=>{
//      if(!err){
//          console.log(result.rows);
//      }
//      client.end();
//  })
 
//  })();

//  (async () => {
//     await client.connect();
 
//     const result = await client.query(`select * from emp`);
//      console.log(result.rows);
//      client.end();
 
//  })();


 