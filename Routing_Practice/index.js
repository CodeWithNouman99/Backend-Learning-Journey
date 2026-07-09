import express from "express"

const app=express()
const PORT=3000
app.listen(3000,()=>
{
    console.log(`App is running on ${PORT}`)
})

app.get("/",(req,res)=>
{{
    res.send("<h1>This is the home page</h1>")
}})

app.get("/products",(req,res)=>
{
    res.send("<h1>This is the products page</h1>")
})


app.get("/about-us",(req,res)=>
{
    res.send("<h1>This is the about us page</h1>")
})

app.get("/contact-us",(req,res)=>
{
    res.send("<h1>This is the contact us page</h1>")
})


app.get("/about-us/user",(req,res)=>
{
    res.send("<h1>This is the nested route that is user</h1>")
})

//Note :

//Esa route jo define hi nai hoa then it shows Cannot Get


// Esa route ready krne k liye ye hoga
//http://localhost:3000/user/10

const exampleRoute="http://localhost:3000/user/10"

app.get('/user/:userid/:book/:bookid',(req,res)=>
{
    // res.send(`Ye route open hoga ${exampleRoute}`)
    // res.send(req.params)
    //This is the output
   /* {
"userid": "50",
"book": "CS",
"bookid": "12"
}
*/
})