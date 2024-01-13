import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
