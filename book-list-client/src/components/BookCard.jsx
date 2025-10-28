import React from "react";

const BookCard = ({ book,handelDeleat }) => {
  return (
    <div>
      <div className="bg-white shadow-lg rounded-xl  w-80 hover:scale-105 transition-transform duration-300 mx-auto mt-10">
        <div className="p-5">
          <h2 className="text-2xl font-bold mb-2">{book.title}</h2>
          <p className="text-gray-700 mb-1">Author: {book.author}</p>
          <p className="text-gray-700 mb-1">Genre: {book.genre}</p>
          <p className="text-gray-900 font-semibold mb-1">
            Price: ${book.price}
          </p>
          <p className="text-yellow-500 font-semibold">
            Rating: {book.rating} ⭐
          </p>
          <button className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">
            Add to Favorites
          </button>
          <button onClick={()=> handelDeleat(book.id) } className="mt-3 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition-colors">Deleat❌</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
