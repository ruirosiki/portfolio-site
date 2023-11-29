import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import headshot from "../../assets/images/headshot.jpg";
import "./Home.css";

export default function Home() {
  return (
    <>
      <div title="Home" id="home" style={{ height: 500 }}>
        <img className="headshot" src={headshot} alt="Headshot" />
        <h1>Hi, my name is Andrew Corbin.</h1>
        <p></p>
        <p>Software Engineer and Smart Home Enthusiast</p>
      </div>
      <About />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
