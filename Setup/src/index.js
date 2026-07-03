// require("dotenv").config({path:"./Setup/.env"})

import dotenv from "dotenv"


import mongoose from "mongoose"
import {DB_name} from "../src/constant.js"

import connect_DB from "../src/db/index.js"


dotenv.config({path:"./Setup/.env"})

connect_DB()















































/*
import express from "express"
const app=express()
(async()=>
{
    try{
        await mongoose.connect(`${process.env.mongodb_URL}/${DB_name}`)
        app.on("error",(error)=>
        {
            console.log("Error",error)
            throw error
        })
        app.listen(process.env.PORT,()=>
        {
            console.log(`App is listening on ${process.env.PORT}`)
        })
    }catch(err)
    {
        console.log("Error",err)
        throw err
    }
})()

*/