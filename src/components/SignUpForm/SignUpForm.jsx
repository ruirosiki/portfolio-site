import React, { Component } from "react";
import { signUp } from "../../utilities/users-service";
// export our class component like always
// one of the key distinctions between classes and function components is the extends keyword
// This tells our code to "get all the good stuff" from component but let me make it work for my purposes
// internally, class field syntax converted into the constructor method approach

export default class SignUpForm extends Component {
  // Class components handle state differently than functions
  // instead of hooks, we use the class field called state
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  //handleChange method -> handles user input in the form
  //looks at the name of the input field and updates the value associated with that input field in state
  handleChange = (evt) => {
    // look at event, gather information from event, then update state
    this.setState({
      // we can use a specific syntax to dynamically gather data from the form
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    // alert(JSON.stringify(this.state));
    try {
      // this is where we will run our API call
      // start api call process with a copy of the state object
      const formData = { ...this.state };
      delete formData.error;
      delete formData.confirm;
      //could also use destructuring
      // const { name, email, password} = this.state
      // const formData = { name, email, password}
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      // handle our errors
      this.setState({ error: "Sign up Failed - try again" });
    }
  };
  //Every single class component needs a render method
  // this render method tells our what this component returns
  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <button type="submit" disabled={disable}>
              SIGN UP
            </button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}
