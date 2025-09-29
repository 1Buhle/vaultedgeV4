// products.js or in your main server file
const express = require("express");
const router = express.Router();
const mysql = require("mysql2/promise");

// Create a reusable DB connection
async function getDBConnection() {
  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });
    return connection;
  } catch (err) {
    console.error("Failed to connect to DB:", err);
    throw err; // will be caught in the route
  }
}

// GET /products
router.get("/products", async (req, res) => {
  let connection;
  try {
    connection = await getDBConnection();

    // Query products
    const [rows] = await connection.query("SELECT * FROM products");

    // Return products
    res.json(rows);
  } catch (err) {
    console.error("Error fetching products:", err); // Logs the exact error
    res.status(500).json({
      error: err.message || "Internal Server Error",
    });
  } finally {
    if (connection) {
      await connection.end();
    }
  }
});

module.exports = router;
