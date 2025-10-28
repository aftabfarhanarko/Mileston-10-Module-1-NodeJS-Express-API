const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const friends = [
  {
    id: 1,
    name: "Arafat",
    age: 21,
    city: "Dhaka",
    hobby: "Football",
  },
  {
    id: 2,
    name: "Farhan",
    age: 20,
    city: "Chattogram",
    hobby: "Coding",
  },
  {
    id: 3,
    name: "Nadim",
    age: 22,
    city: "Sylhet",
    hobby: "Gaming",
  },
  {
    id: 4,
    name: "Mahin",
    age: 19,
    city: "Rajshahi",
    hobby: "Music",
  },
  {
    id: 5,
    name: "Rafi",
    age: 23,
    city: "Khulna",
    hobby: "Travelling",
  },
  {
    id: 6,
    name: "Sabbir",
    age: 21,
    city: "Barishal",
    hobby: "Photography",
  },
  {
    id: 7,
    name: "Habib",
    age: 22,
    city: "Cox's Bazar",
    hobby: "Swimming",
  },
  {
    id: 8,
    name: "Jahid",
    age: 20,
    city: "Mymensingh",
    hobby: "Drawing",
  },
  {
    id: 9,
    name: "Rakib",
    age: 24,
    city: "Dhaka",
    hobby: "Reading",
  },
  {
    id: 10,
    name: "Tanvir",
    age: 21,
    city: "Comilla",
    hobby: "Gym",
  },
];
app.get("/", (req, res) => {
  res.send("This is Friend Server Running now ");
});

app.get("/user", (req,res) => {
    res.send(friends);
})

app.post("/user", (req,res) => {
    console.log("My Post Data Comming Now", req.body)
    const myNewFriend = req.body;
    myNewFriend.id = friends.length + 1;
    friends.push(myNewFriend);
    res.send(myNewFriend)
})


app.listen(port, () => {
  console.log(`This is My Friend Server Running Now ${port}`);
});
