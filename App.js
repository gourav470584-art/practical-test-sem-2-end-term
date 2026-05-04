import React from "react";
import UserContext from "./UserContext";
import Parent from "./Parent";
import "./App.css";

function App() {
  const user = {
    name: "Rahul",
    age: 22
  };

  return (
    <UserContext.Provider value={user}>
      <div className="app">
        <h1>Context API Example</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default App;