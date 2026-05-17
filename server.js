const express = require("express");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


// HOME
app.get("/", (req, res) => {
  res.send("Server Node.js berjalan!");
});


// GET USERS
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());


// HOME
app.get("/", (req, res) => {
  res.send("Server Node.js berjalan!");
});


// GET USERS
app.get("/users", (req, res) => {

  try {

    const filePath = path.join(__dirname, "users.json");

    const data = fs.readFileSync(filePath);

    const users = JSON.parse(data);

    res.json(users);

  } catch (err) {

    res.status(500).json({
      error: err.message
    });

  }

});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


// ADD USER
app.post("/users", (req, res) => {

  const data = fs.readFileSync("users.json");

  const users = JSON.parse(data);

  const newUser = {
    username: req.body.username,
    password: req.body.password
  };

  users.push(newUser);

  fs.writeFileSync(
    "users.json",
    JSON.stringify(users, null, 2)
  );

  res.json({
    status: "success",
    user: newUser
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});