// const express = require("express");
//This is another format to fetch express like import react from react
import express from "express"

require('dotenv').config()
const app = express();

// app ko ap is trha samjo k Math. matlab ab ap Math ko jo functions ha ap us ko use kr sakte he
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login",(req,res)=>
{
    res.send("This is login page")
})

app.get("/twitter",(req,res)=>
{
    res.send('<h1>This is Twitter page</h1>')
})

app.get("/Google",(req,res)=>
{
  res.send("https://www.google.com")
})

app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`);
});
