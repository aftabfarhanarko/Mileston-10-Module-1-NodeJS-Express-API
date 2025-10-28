import { Suspense } from "react";
import "./App.css";
import MyfirendList from "./components/MyfirendList";
const promiseDat = fetch("http://localhost:4000/user").then(res => res.json())

function App() {
  return (
    <>
      <h1>My Firend Client Side</h1>
      <div>
        <Suspense fallback={<h1>Loding.....</h1>}>
          <MyfirendList promiseDat={promiseDat}></MyfirendList>
        </Suspense>
      </div>
    </>
  );
}

export default App;
