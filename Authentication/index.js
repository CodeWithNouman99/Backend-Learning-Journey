import express from "express";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());

// Register User
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash Password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Normally you would save this to MongoDB
    res.json({
      username,
      hashedPassword,
      message: "User Registered Successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

// Login User
app.post("/login", async (req, res) => {
  try {
    // Simulating data stored in database
    const storedPassword = await bcrypt.hash("123456", 10);

    const { password } = req.body;

    // Compare Password
    const isMatch = await bcrypt.compare(password, storedPassword);

    if (isMatch) {
      res.json({
        message: "Login Successful ✅"
      });
    } else {
      res.status(401).json({
        message: "Invalid Password ❌"
      });
    }

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});