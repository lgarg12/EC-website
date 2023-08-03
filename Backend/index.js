const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute  = require("./routes/posts");

dotenv.config();

const ConnectionUrl = process.env.MONGO_URL;

async function connectToDatabase() {
  try {
    await mongoose.connect(ConnectionUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully!');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
}

connectToDatabase();

// MiddleWare
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use("/api/user",userRoute);
app.use("/api/auth",authRoute);
app.use("/api/post",postRoute);

app.get("/", (req, res) => {
    res.send("Welcome to home");
});
  
app.get("/user", (req, res) => {
  res.send("Welcome to User Page");
});

app.listen(8800, () => {
  console.log("Backend Server is running on port 8800");
});
