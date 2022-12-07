import React from "react";

const UserCard = (props) => {
  return (
    <div className="user">
      <p>ID: {props.user.id} </p>
      <p>{props.user.firstName} </p>
      <p>{props.user.lastName} </p>
      <p>{props.user.email} </p>
      <p>{props.user.phoneNumber} </p>
    </div>
  );
};

export default UserCard;
