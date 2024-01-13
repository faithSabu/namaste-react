import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Home />
    </div>
  );
};

const appRouter = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <Error /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);  // this is older one
root.render(<RouterProvider router={appRouter} />); // use "RouterProvider" and give routes to "router"
