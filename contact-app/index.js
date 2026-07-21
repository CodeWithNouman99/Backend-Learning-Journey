import express from "express";
import mongoose from "mongoose";
import { Contact } from "./models/contacts.models.js";

const app = express();
const PORT = 3000;

// Middlewares
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// Database Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/contacts-CRUD")
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => {
    console.log(err);
  });

// Routes

app.get("/", async (req, res) => {
  const contacts = await Contact.find();
  res.render("home", { contacts });
});

app.get("/show-contacts/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
});

app.get("/add-contacts", (req, res) => {
  res.render("add-contacts");
});

app.post("/add-contacts", (req, res) => {
  res.send("This is the add contacts page");
});

app.get("/update-contacts/:id", (req, res) => {
  res.render("update-contacts");
});

app.post("/update-contacts/:id", (req, res) => {
  res.send("This is the update contacts page");
});

app.get("/delete-contact/:id", (req, res) => {
  res.send("This is the delete contact page");
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});