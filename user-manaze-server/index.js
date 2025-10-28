const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello This df is My Users  Server API RUnning");
}); 
const users = [
  { id: 1, name: "Rohim", email: "rohim@gmail.com" },
  { id: 2, name: "Monuio", email: "jout@gmail.com" },
  { id: 3, name: "Kobir", email: "kporbi@gmail.com" },
  { id: 4, name: "Habblu", email: "habblu@gmail.com" },
  { id: 5, name: "Mimes", email: "mimes@gmail.com" },
];

app.get("/user", (req, res) => {
    res.send(users);
})

app.post("/user", (req,res) => {
  console.log("Post User Request",req.body)
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser)
  res.send(newUser);
})


app.listen(port, () => {
  console.log(`My User Server Process Now ${port}`);
});
