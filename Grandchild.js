import React, { useContext } from "react";
import MyContext from "./MyContext";

function GrandChild() {
  const data = useContext(MyContext);

  return (
    <div>
      <h4>GrandChild Component</h4>
      <p>Name: {data.name}</p>
      <p>Age: {data.age}</p>
    </div>
  );
}

export default GrandChild;