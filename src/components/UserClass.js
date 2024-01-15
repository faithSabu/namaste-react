import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 10,
    };
  }

  render() {
    const { name, location, about } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user_card">
        <h2>Count: {count}</h2>
        <h2>Count: {count2}</h2>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 2,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>About: {about}</h4>
      </div>
    );
  }
}

export default UserClass;
