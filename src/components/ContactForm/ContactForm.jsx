import React, { useState, useEffect } from "react";
import { PatternFormat } from "react-number-format";
import * as contactApi from "../../utilities/contact-api";

const ContactForm2 = () => {
  const [status, setStatus] = useState("Submit");
  // const [contactDetails, setContactDetails] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   message: "",
  // });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, phone, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    };
    await contactApi.sendMail(details);
    setStatus("Submit");
    alert(status);
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setStatus("Sending...");
  //   console.log(status);
  //   console.log("this is state in contact form:", contactDetails);
  //   const { name, email, phone, message } = contactDetails;
  //   console.log("this is name", name);
  //   let details = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     message: message,
  //   };
  //   await contactApi.sendMail(details);
  //   setStatus("Submit");
  //   alert(status);
  // };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          // value={contactDetails.name}
          // onChange={handleChange}
          // required
        ></input>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          // value={contactDetails.email}
          // onChange={handleChange}
          // required
        ></input>
      </div>
      <div>
        <label htmlFor="phone">Phone:</label>
        <PatternFormat
          id="phone"
          format="+1 (###) ###-####"
          allowEmptyFormatting
          mask="_"
          // value={contactDetails.phone}
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <input
          type="text"
          id="message"
          // value={contactDetails.message}
          // onChange={handleChange}
          // required
        ></input>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm2;
