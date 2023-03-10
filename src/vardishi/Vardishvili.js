import React from "react";

const Vardishvili = (props) => {
  return;
  <ul>
    {props.data.map((user) => {
      return (
        <li key={user.id}>
          <h1>{user.name}</h1>
        </li>
      );
    })}
  </ul>;
};

export default Vardishvili;
