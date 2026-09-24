const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json()); // middelware h jo incoming resuest ki json body ko js ke obejct me convert kerta h.
app.use(logger);
function logger(req,res,next){
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next();
}

// a middle ware can modify request and can sand response.
function allowed(req,res,next){
  const allowed = false;
  if(!allowed){
    return res.status(401).json({
      message: "Authentication required"
    })
  }
  next(); // iska kaam hota h is middleware ke badme next middlware ya route ko execute kerna.
}


const users = new Map();

users.set(1, { id: 1, name: "Alice", email: "alice@example.com" });
users.set(2, { id: 2, name: "Bob", email: "bob@example.com" });

let nextId = 3;
app.get("/users", allowed, (req, res) => {
  const allUsers = Array.from(users.values());

  res.json(allUsers);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: "name and email are required" });
  }

  const newUser = { id: nextId, name, email };

  users.set(nextId, newUser);
  nextId++;

  res.status(201).json({ message: "User created successfully", user: newUser });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(`  GET  http://localhost:${PORT}/users/:id  — fetch a user`);
  console.log(`  POST http://localhost:${PORT}/users      — create a user`);
});
