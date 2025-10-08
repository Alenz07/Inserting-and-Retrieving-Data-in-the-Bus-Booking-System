const db = require("./utils/database")
const express = require("express");
const mysql = require("mysql2"); 
const router = express.Router()
const app = express();
const users = require("./routes/users")
const buses = require("./routes/bus")

// Middleware to parse JSON (optional for APIs)
app.use(express.json());
app.use("/user", users)
app.use("/bus", buses)

// Define a simple route
app.get("/", (req, res) => {
    console.log("Request received!");
    res.send("Hello, This is bus ticketing system");
});

// Start the server on port 2000
app.listen(2000, () => {
    console.log("Server is running on http://localhost:2000");
});
