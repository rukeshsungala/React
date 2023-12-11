import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("child consturctor");
  }
  componentDidMount() {
    console.log("child mount");
  }

  render() {
    const { name } = this.props;
    const { count } = this.state;
    console.log("child render");
    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h2>Location: Bangalore</h2>
        <h3>Count: {count}</h3>
        <button
          onClick={() => {
            // Never Update state variables directly
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
      </div>
    );
  }
}
export default UserClass;
