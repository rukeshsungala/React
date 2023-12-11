import { useState } from "react";

const User = (props) => {
  const [count] = useState(0);

  return (
    <div className="user-card">
      <h1>Name:{props.name}</h1>
      <h2>Location: Bangalore</h2>
      <h3>Count: {count}</h3>
    </div>
  );
};

export default User;
