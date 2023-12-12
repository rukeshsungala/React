import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "child consturctor");
  }
  async componentDidMount() {
    console.log(this.props.name + "child mount");
    const data = await fetch("https://api.github.com/users/rukeshsungala");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  render() {
    console.log(this.props.name + "child render");
    const { name, location, company } = this.state.userInfo;

    return (
      <div className="user-card">
        <h1>Name:{name}</h1>
        <h2>Location:{location}</h2>
        <h3>{company}</h3>
      </div>
    );
  }
}
export default UserClass;
