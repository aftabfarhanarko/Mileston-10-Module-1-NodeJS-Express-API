import React, { use, useState } from "react";
import Friend from "./Friend";
import '../index.css'

const MyfirendList = ({ promiseDat }) => {
  const hgddug = use(promiseDat);
  const [data , setData] = useState(hgddug)

  const handelSubmite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const age = e.target.age.value;
    const city = e.target.city.value;
    const newFriend = { name, age, city };

    fetch("http://localhost:4000/user", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newFriend),
    })
      .then((res) => res.json())
      .then((asdasda) => {
          const nreAdd = [...data, asdasda]
          setData(nreAdd);
          console.log("This is My Srever Add Data", asdasda);
      });
  };

  return (
    <div>
      <form onSubmit={handelSubmite}>
        <input name="name" type="text" placeholder="enter your name"></input>{" "}
        <br></br>
        <input name="age" type="number" placeholder="enter your age"></input>
        <br></br>
        <input
          name="city"
          type="text"
          placeholder="enter your city"
        ></input>{" "}
        <br></br>
        <button>Add Friend</button>
      </form>

      <div className="dhf">
        {data.map((friend) => (
          <Friend friend={friend} key={friend.id}></Friend>
        ))}
      </div>
    </div>
  );
};

export default MyfirendList;
