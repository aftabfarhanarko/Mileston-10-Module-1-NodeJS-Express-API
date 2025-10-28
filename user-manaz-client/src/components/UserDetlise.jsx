import React, { use, useState } from "react";

const UserDetlise = ({ promiseUser }) => {
  const pasromis = use(promiseUser);
  const [user, setUser] = useState(pasromis);

  const handelSubmite = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);

    const sendUser = { name, email };

    //  Send Request Form Server
    fetch("http://localhost:3000/user", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(sendUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Client Side Request Data", data);
        const setNewUser = [...user, data];
        setUser(setNewUser);
      });
  };
  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handelSubmite}>
        <input name="name" type="text" placeholder="Enter Your Name"></input>{" "}
        <br></br>
        <input name="email" type="email" placeholder="Enter Your Email"></input>
        <br></br>
        <button>Add User</button>
      </form>
      <div>
        {user.map((item) => (
          <p key={item.id}>
            Name : {item.name} Email : {item.email}
          </p>
        ))}
      </div>
    </div>
  );
};

export default UserDetlise;
