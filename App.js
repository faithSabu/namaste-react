import React from "react";
import ReactDOM from "react-dom/client";

const TitleComponent = () => (
  <h1 id="titleComponent">This is Title component</h1>
);

const bodyElement = <h3>This is body element</h3>;

// How to use component (use angular brackets) and element (use curley brackets) in JSX.
// How to use an element and component inside another element
const titleElement = (
  <div>
    <h2 id="titleElement">This is Title Element</h2>
    <TitleComponent />
    {bodyElement}

    {/* <TitleComponent /> & {TitleComponent()} => these are same; since functional component is
    basically a js function. And we can use "{}" to execute js. So we can call a
    function inside "{}".
    So these are same:
    1. <TitleComponent /> 
    2. <TitleComponent></TitleComponent>
    3. {TitleComponent()}
    */}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(titleElement); // rendering an element
