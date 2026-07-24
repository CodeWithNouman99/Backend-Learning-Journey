import express from "express";

const app = express();

const PORT = 8000;

// Middleware
app.use(express.json());

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to HTTP Learning 🚀");
});

// GET Request
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "GET Request",
    users: ["Nouman", "Ali", "Ahmed"],
  });
});

// POST Request
app.post("/users", (req, res) => {
  res.status(201).json({
    success: true,
    message: "POST Request",
    data: req.body,
  });
});

// PUT Request
app.put("/users/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `PUT Request for User ${req.params.id}`,
    updatedData: req.body,
  });
});

// PATCH Request
app.patch("/users/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `PATCH Request for User ${req.params.id}`,
    updatedFields: req.body,
  });
});

// DELETE Request
app.delete("/users/:id", (req, res) => {
  res.status(200).json({
    success: true,
    message: `DELETE Request for User ${req.params.id}`,
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});