import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      About
      <User
        name="Faith - function"
        location="Kochi - function"
        about="function"
      />
      <UserClass name="Faith - class" location="Kochi - class" about="class" />
    </div>
  );
};

export default About;
