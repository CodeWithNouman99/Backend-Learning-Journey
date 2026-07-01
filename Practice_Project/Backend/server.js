import express from "express"
import cors from "cors";
import axios from "axios";

const app=express()
app.use(cors())


app.get("/",(req,res)=>
{
    res.send("Server is ready!")
})

app.get("/api/products",async(req,res)=>
{
    try
    {
        const response=await axios.get("https://dummyjson.com/products")
        res.json(response.data.products)
    }
    catch(err)
    {
        res.status(500).json({
      message: "Error fetching products",
    });
    }
})

const PORT=3000

app.listen(PORT,()=>
{
    console.log(`Server running on http://localhost:${PORT}`);
})