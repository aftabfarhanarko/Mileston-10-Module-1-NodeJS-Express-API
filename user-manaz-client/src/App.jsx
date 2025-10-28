import { Suspense } from "react";
import "./App.css";
import UserDetlise from "./components/UserDetlise";

const promiseUser = fetch("http://localhost:3000/user").then(res => res.json());
function App() {
  return (
    <>
      <h1>User Manaz System</h1>
      <div>
        <Suspense fallback={<h3>Loding.....</h3>}>
          <UserDetlise promiseUser={promiseUser}></UserDetlise>
        </Suspense>
      </div>
    </>
  );
}

export default App;
