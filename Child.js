import React, { useContext } from "react";
import UserContext from "./UserContext";

function Child() {
  const user = useContext(UserContext);

  return (
    <div className="box child">
      <h3>Child Component</h3>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Age:</strong> {user.age}</p>
    </div>
  );
}

export default Child;