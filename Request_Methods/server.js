import express from "express"

const app=express()

const PORT=3000
app.use(express.json())

app.use(express.urlencoded({extended:false}))
app.listen(PORT,()=>
{
    console.log("server is running on port "+PORT)
})

// app.post("/about",(req,res)=>
// {
//     res.send(req.body)
// })


// app.get("/about",(req,res)=>
// {
//     res.send(req.hostname)          // localhost
// })


// app.get("/about", (req, res) => {
//   res.send(req.ip)
// });


// app.get("/about", (req, res) => {
//   res.send(req.ips)                 //[]
// });


// app.get("/about", (req, res) => {
//   res.send(req.method)          // GET
// });

// app.get("/about", (req, res) => {
//   res.send(req.originalUrl)         // about
// });


// app.get("/about", (req, res) => {
//   res.send(req.path)                    //about
// });


// app.get("/about", (req, res) => {
//   res.send(req.protocol)                //http
// });


// app.get("/about", (req, res) => {
//   res.send(req.secure)          // false it means we use un secure protocol
// });

app.get("/about", (req, res) => {
  res.send(req.route)
});

                                       //These are the Properties


                                       //Methods





