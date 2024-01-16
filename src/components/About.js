import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import User2Class from "./User2Class";

// const About = () => {
//   return (
//     <div>
//       About
//       <User
//         name="Faith - function"
//         location="Kochi - function"
//         about="function"
//       />
//       <UserClass name="First UserClass" location="Kochi - class" about="class" />
//     </div>
//   );
// };

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent DidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div>
        About
        <UserClass
          name="First UserClass"
          location="Kochi - class"
          about="class"
        />
        <UserClass
          name="Second UserClass"
          location="Kochi - class"
          about="class"
        />
        <User2Class
          name="First User2Class"
          location="Kochi - class"
          about="class"
        />
      </div>
    );
  }
}

export default About;
