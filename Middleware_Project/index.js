const express = require('express');
const app = express()
const port = 3000
//Middleware
app.use((req,res,next)=>
{
    const date=new Date()
    console.log(`Time: ${date.getDate()} /${date.getMonth()} ${req.method} ${req.url}`)
    next()
})
//Routes
app.get('/', (req, res) => {
  res.send("<h1>Home Page</h1>")
})
app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})