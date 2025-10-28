import { Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

const promiseData = fetch("http://localhost:4000/book").then(res => res.json());

function App() {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>
        <Suspense fallback={<h1 className="text-center text-3xl font-semibold">Loding.......!</h1>}>
          <BookList promiseData={promiseData}></BookList>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
