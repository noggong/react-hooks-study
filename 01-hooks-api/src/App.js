import React, { useState, useEffect } from "react";
import styled from "styled-components";

import "./App.css";
import Button, { ButtonRed } from "./Ui/Button";
import User from "./Components/User";

const UsersJson = [
  {
    id: 1,
    name: "김윤호",
    age: 33,
    height: 140,
    job: "개발자"
  },
  {
    id: 2,
    name: "우준호",
    age: 38,
    height: 190,
    job: "코덬"
  }
];
function App() {
  const [users, setUsers] = useState(UsersJson);
  return (
    <div className='App'>
      {users.map((user) => (
        <div key={user.id}>
          <span>{user.id}</span>
          <User
            name={user.name}
            height={user.height}
            job={user.job}
            age={user.age}
          ></User>
          <button
            onClick={() => {
              const index = users.findIndex((u) => u.id === user.id);
              users.splice(index, 1);
              setUsers([...users]);
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
