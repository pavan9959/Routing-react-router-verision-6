import React from "react";
import { ReactDOM } from "react";
import { Link, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>app</h1>
      <Link to="/other">Other</Link>
    </div>
  );
}

export default App;
