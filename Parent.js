import React from "react";
import Child from "./Child";

function Parent() {
  return (
    <div className="box">
      <h2>Parent Component</h2>
      <Child />
    </div>
  );
}

export default Parent;