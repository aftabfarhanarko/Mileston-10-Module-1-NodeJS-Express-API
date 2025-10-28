import React, { use, useState } from "react";
import BookCard from "./BookCard";

const BookList = ({ promiseData }) => {
  const promises = use(promiseData);
  const [books, setBooks] = useState(promises);

  const handleSubmit = (e) => {
    e.preventDefault();
    const price = e.target.price.value;
    const title = e.target.title.value;
    const author = e.target.author.value;
    console.log({ price, title, author });

    const bookSend = { price, title, author };

    fetch("http://localhost:4000/book", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookSend),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const addNow = [...books, data];
        setBooks(addNow);
        e.target.reset();
      });
  };

  const handelDeleat = (id) => {
  console.log(id);
    fetch("http://localhost:4000/book",{
        method:"DELETE"
    } ).then(res => res.json())
    .then(data => {
        const ubdeat = books.filter(b => b.id !== id);
        setBooks(ubdeat)
    })
  }
  return (
    <div className="w-11/12 mx-auto">
      <div>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 w-[500px] text-left border mx-auto my-10 p-4"
        >
          <div>
            <label className="block mb-1 font-medium">Title</label>
            <input
              type="text"
              name="title"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter book title"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Author</label>
            <input
              type="text"
              name="author"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter author name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Price</label>
            <input
              type="number"
              name="price"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter price"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3  gap-6  ">
        {books.map((book) => (
          <BookCard handelDeleat={handelDeleat} key={book.id} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default BookList;
