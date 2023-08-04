const express = require("express");
const app = express();
const coronaData = require("./coronaData.json");

app.get("/", function (req, res){
  console.log("__dirnameの中身",__dirname);
  res.sendFile(__dirname + "/index.html");
});

app.listen (5050,function(){
  console.log("Listening on localhost port 5050")
})