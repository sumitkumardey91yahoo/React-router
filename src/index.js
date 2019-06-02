import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import Route00 from "./router/routes";
function App() {
  return (
    <div className="App">
      <Route00 />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
