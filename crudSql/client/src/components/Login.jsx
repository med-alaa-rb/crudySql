import React from "react";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };

    this.handleChange = this.handleChange(this);
    this.handleSubmit = this.handleSubmit(this);
  }
  handleChange(event) {
    this.setState({
      name: event.target.name,
      //   email: event.target.email,
      //   password: event.target.password,
    });
  }
  handleSubmit() {
    alert(this.state.name);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            name :
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          {/* <label>
            email :
            <input
              type="text"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            password :
            <input
              type="text"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label> */}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}

export default Login;
