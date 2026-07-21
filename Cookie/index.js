import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());

// Set Cookie
app.get("/set-cookie", (req, res) => {
    res.cookie("username", "Nouman Aslam", {
        maxAge: 1000 * 60 * 60 * 24 // 1 Day
    });

    res.send("Cookie Created Successfully");
});

// Get Cookie
app.get("/get-cookie", (req, res) => {
    res.send(req.cookies);
});

// Delete Cookie
app.get("/delete-cookie", (req, res) => {
    res.clearCookie("username");
    res.send("Cookie Deleted Successfully");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`);
});