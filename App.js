import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => <h1>This is Title component</h1>;

// Eg. of Componet composition - ie, just combining mutliple componets (Here <Title/> component is used in another component)
const HeaderComponent = () => (
  <div id="container">
    <Title /> 
    This is Header component
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />); // use angular brackets to render a component
