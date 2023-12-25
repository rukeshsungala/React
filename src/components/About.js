import UserContext from "../utils/UserContext";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    //console.log("parent consturctor");
  }
  componentDidMount() {
    //console.log("Parent mount");
  }
  render() {
    //console.log("Parent render");
    return (
      <div className="about">
        <h1>About</h1>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
        <h2>This is Food App</h2>
        <UserClass name={"Rukesh Sungala"} />
      </div>
    );
  }
}

export default About;
