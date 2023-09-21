import React, { Component } from "react";
import Contact from "../../pages/Contact/Contact";

export default class content extends Component {
  render() {
    return (
      <>
        <div title="Home" id="home" style={{ height: 500 }}>
          <h1>This is Home section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div title="about" id="about" style={{ height: 500 }}>
          <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" style={{ height: 500 }}>
          <Contact />
        </div>
        <div id="experience" style={{ height: 500 }}>
          <h1>This is Service section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          repellendus. Totam nihil similique a repellat minus dolor amet quasi.
          Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
      </>
    );
  }
}
