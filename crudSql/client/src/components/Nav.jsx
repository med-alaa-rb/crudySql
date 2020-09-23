import React from "react";
import Signup from "./Signup.jsx";
import Login from "./Login.jsx";

export class Nav extends React.Component {
  render() {
    return (
      <div>
        <Signup />
        <Login />
      </div>
    );
  }
}

export default Nav;
