import express from "express"
const app=express()

import session from "express-session";

app.use(session ({
    secret:"secret password",
    resave:false,
    saveUnitailized: false,
    cookie: {maxAge:1000 *60 *60 *24}           // 1 day bad session automatically delete ho jae ga
}))

app.get("/", (req, res) => {
   if (req.session.username)
    {
        res.send(`<h1>Username from session is  ${req.session.username}:</h1>`)
    }else{
        res.send("No username found in session...")
    }
});

app.get("/set-username", (req, res) => {
    req.session.username ="Nouman Aslam"
  res.send("<h1>Username has been set in session</h1>")
});

app.get("/get-username", (req, res) => {
    if (req.session.username)
    {
        res.send(`<h1>Username from session is  ${req.session.username}:</h1>`)
    }else{
        res.send("No username found in session...")
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => `Server running on port ${port} 🔥`);