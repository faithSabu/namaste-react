import React from "react";
import ReactDOM from "react-dom/client";

// eg. of core react
const headingInCoreReact = React.createElement(
  "h1",
  { id: "heading" },
  "Welcome from core react"
);

// use of JSX - the same element in JSX
const headingInJSX = <h1 id="heading">Welcome from JSX</h1>; // this code will be converted to React.createElement(core of react) by Babel

// Both will be similar - a JS object
console.log(headingInCoreReact);
console.log(headingInJSX);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingInJSX);

// How it converts
// React.createElement(core react) -> ReactElement(a JS object) -> HTML element (on rendering)
