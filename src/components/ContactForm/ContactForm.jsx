import React, { useState } from "react";
import * as contactApi from "../../utilities/contact-api";
const ContactForm2 = () => {
  const [status, setStatus] = useState("Submit");

  //   state = {
  //     name: "",
  //     phone: "",
  //     email: "",
  //     message: "",
  //   };

  //   handleChange = (evt) => {
  //     this.setState({
  //       [evt.target.name]: evt.target.value,
  //       error: "",
  //     });
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    console.log(status);
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    await contactApi.sendMail(details);
    // let response = await fetch("http://localhost:3000/contact", {
    //   method: "Post",
    //   headers: {
    //     "Content-Type": "application/json;charset=utf-8",
    //   },
    //   body: JSON.stringify(details),
    // });
    setStatus("Submit");
    // let result = await response.json();
    alert(status);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          // value={this.state.name}
          // onChange={this.handleChange}
          //   required
        ></input>
      </div>
      {/* <label>Phone Number</label>
      <PatternFormat
        format="+1 (###) ###-####"
        allowEmptyFormatting
        mask="_"
        value={this.state.phone}
      /> */}
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          // value={this.state.email}
          // onChange={this.handleChange}
          //   required
        ></input>
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          // value={this.state.message}
          // onChange={this.handleChange}
          //   required
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm2;
