const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const postGres = require('postgres');
const {Client} = require('pg')
const app=express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


const client = new Client({
    host:'localhost',
    port:5432,
    user:'postgres',
    password:'1234',
    database:'master'
})

client.on("connect",()=>{
    console.log("Database connection");
})

client.on("end",()=>{
    console.log("Connection ends");
});

module.exports = client;

// Jade
app.set('views', __dirname+'/views');
app.set('view engine', 'jade');
 
// app.get('/', function(req, res){
//   res.render('home', {
//     title: "Home page"     
//   });
// });
 
// app.get('/about-us', function(req, res){    
//   res.render('about-us', {
//     title: "About Us"    
//   });
// });

  app.get('/', function(req, res){

    client.connect();

    client.query(`select * from emp`,(err,result)=>{
        var result;
        if(!err){
            console.log(result.rows);
            result =result.rows;            
            res.render('employee', {
                title: "Employee",                
                employee:result
              });

        }
        client.end();    
    })
  });

  app.get('/asset-master', function(req, res){

    client.connect();

    client.query(`select * from assetmaster`,(err,result)=>{
        var result;
        if(!err){
            console.log(result.rows);
            result =result.rows;            
            res.render('assetmaster', {
                title: "Asset Master",                 
                employee:result                
              });

        }
        client.end();    
    })
  });

  app.get('/category-master', function(req, res){

     client.connect();

    client.query(`select * from categorymaster`,(err,result)=>{
        var result;
        if(!err){
            console.log(result.rows);
            result =result.rows;            
            res.render('categorymaster', {
                title: "Category Master",                
                employee:result                
              });

        }
        client.end();    
    })
  });

  app.get('/asset-issue', function(req, res){
    res.render('assetissue', {
        title: "Asset Issue"                        
      });    
  });

  app.get('/asset-return', function(req, res){

    client.connect();

    client.query(`select * from assetreturn`,(err,result)=>{
        var result;
        if(!err){
            console.log(result.rows);
            result =result.rows;            
            res.render('assetreturn', {
                title: "Asset Return",                 
                employee:result                
              });

        }
        client.end();    
    })
  });

  app.get('/asset-scrap', function(req, res){

    client.connect();

    client.query(`select * from assetscrap`,(err,result)=>{
        var result;
        if(!err){
            console.log(result.rows);
            result =result.rows;            
            res.render('assetscrap', {
                title: "Asset Scrap",                  
                employee:result                
              });

        }
        client.end();    
    })
  });

  app.get('/asset-history', function(req, res){

    client.connect();

    client.query(`select * from assethistory`,(err,result)=>{
        var result;
        if(!err){
            console.log(result.rows);
            result =result.rows;            
            res.render('assethistory', {
                title: "Asset History",                
                employee:result                
              });

        }
        client.end();    
    })
  }); 
 
app.listen(3000,()=>{
  console.log('Server is running on port 3000');
});