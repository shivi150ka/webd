const { faker } = require('@faker-js/faker');
const mysql =require('mysql2');
const express = require("express");
const app = express();
let createRandomUser = ()=> {
  return [
    faker.string.uuid(),
    faker.internet.username(), // before version 9.1.0, use userName()
     faker.internet.email(),
   
     faker.internet.password(),
   
  ];
}
//console.log(createRandomUser());

//let q="INSERT INTO user(id,username,email,password) VALUES ?";
//let users=[
//  ["123a","123_newusera","abc@gmail.comb","abc12a"],
//  ["1234","123_newuser4","abc@gmail4.comc","abc124"],
//];
// let data =[];
// for(let i =1; i<=100;i++){
//   data.push(createRandomUser());
// }

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'SCHOOL',
  password:'annu@123',
});
// try{
// connection.query(q, [data],(err,result)=>{
//     if(err) throw err;
//     console.log(result);
// });
// }
// catch(err){
//     console.log(err);
// }
// connection.end();
app.get("/",(req,res)=>{
  res.send("app is started");
});
app.listen("8080",()=>{
  console.log("server is listening to port 8080");
});