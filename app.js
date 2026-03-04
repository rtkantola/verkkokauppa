const express = require("express");
const pool = require("./database");

const app = express();
app.use(express.json());

app.listen(3000, () => {
  console.log("toimiiko");
});
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result);
  } catch (e) {
    console.error(e);  
  }
});
app.post("/users", async (req, res) => {
  try {
    const user = req.body;

    const result = await pool.query(
      "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *", 
      [user.name, user.email, user.password]
      
    );

    res.json(result);
  } catch (e) {
    console.error(e);
  }
});