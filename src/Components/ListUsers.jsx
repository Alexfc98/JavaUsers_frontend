import React from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const ListUsers = (props) => {
  let [listUsers, setListUsers] = useState([]);
  function closeW(){
    props.setW1(false);
  }
  useEffect(() => {
    axios
      .get("http://localhost:9095/users")
      .then((res) => {
        console.log("DATOS");
        setListUsers(res.data);
      })
      .catch((err) => console.log("datos"));
  }, []);

  return (
    <div>
      {listUsers.map((user) => (
        <UserCard user={user} />
      ))}
      <input type="button" onClick={closeW} value="Close" />
    </div>
  );
};

export default ListUsers;
