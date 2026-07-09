import express from "express";

const app = express();

// This is the response methods

//     1)       send()
// app.get("/", (req, res) => {
//     res.send("Hello World");
// });
            //2)   json()
// app.get("/", (req, res) => {
//     const users=
//     [
//         {
//             name:"Ali",
//             CGPA:2.90
//         },
//         {
//             name:"Hamza",
//             CGPA: 3.90
//         }
//     ]
//     res.json(users);
// });



//                  3) josnp
// app.get("/", (req, res) => {
//     res.jsonp("Hello World");
// });            



//                      4) re-direct


// app.get("/user", (req, res) => {
//     res.send("This is the user page");
// });
// app.get("/about", (req, res) => {
//     res.redirect('/user');
// });


//                      5) render()

// app.set('view engine','ejs')


// app.get("/user", (req, res) => {
//   res.render("user")        //render method html ki file ko show krta he jo hum ne alag se views name ka folder banaya ha aur su k ander user.ejs name ki file banae he
// });


//3. res.status()

//Sets the HTTP status code.

// app.get("/status", (req, res) => {
//     res.status(200).send("Success");
// });

//Example:

// res.status(404).send("Page Not Found");


//                  res.end()

// app.get("/end", (req, res) => {
//     res.end();
// });


//                  res.download()

// app.get("/download", (req, res) => {
//     res.download("./files/resume.pdf");
// });


/*
res.sendFile()

Sends a file to the browser.

import path from "path";

app.get("/file", (req, res) => {
    res.sendFile(path.resolve("./files/index.html"));
});

*/


/*

res.set()

Sets response headers.

app.get("/set", (req, res) => {
    res.set("Content-Type", "text/plain");
    res.send("Hello");
});

Multiple headers:

res.set({
    "Content-Type": "application/json",
    "Author": "Nouman"
});
*/




app.listen(3000, () => {
    console.log("Server is running...");
});