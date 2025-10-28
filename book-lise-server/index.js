const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello This is My Book List");
});

const books = [
  {
    id: 1,
    title: "Learning JavaScript",
    author: "Mark Myers",
    price: 350,
    genre: "Programming",
    rating: 4.5,
  },
  {
    id: 2,
    title: "Clean Code",
    author: "Robert C. Martin",
    price: 500,
    genre: "Software Engineering",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    price: 420,
    genre: "Programming",
    rating: 4.6,
  },
  {
    id: 4,
    title: "You Don’t Know JS",
    author: "Kyle Simpson",
    price: 380,
    genre: "Programming",
    rating: 4.7,
  },
  {
    id: 5,
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    price: 520,
    genre: "Software Engineering",
    rating: 4.9,
  },
  {
    id: 6,
    title: "Atomic Habits",
    author: "James Clear",
    price: 260,
    genre: "Self Improvement",
    rating: 4.9,
  },
  {
    id: 7,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 300,
    genre: "Finance",
    rating: 4.5,
  },
  {
    id: 8,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    price: 240,
    genre: "Motivation",
    rating: 4.3,
  },
  {
    id: 9,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 350,
    genre: "Self Improvement",
    rating: 4.4,
  },
  {
    id: 10,
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    price: 480,
    genre: "Fantasy",
    rating: 4.9,
  },
];

app.get("/book", (req, res) => {
  res.send(books);
});

app.post("/book", (req, res) => {
  console.log("Clicnt request Now", req.body);
  const newbook = req.body;
  newbook.id = books.length + 1;
  books.push(newbook);
  res.send(newbook);
});



app.delete("/book/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = books.findIndex((b) => b.id === id);
  if (index !== -1) {
    const deleatBooks = books.slice(index, 1);
    res.status(200).json(deleatBooks[0]);
  } else {
    res.status(404).json({ message: "Book Not Found" });
  }
});



app.listen(port, () => {
  console.log(`My Port Running sfsf  ${port} `);
});
