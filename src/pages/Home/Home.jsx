import About from "../About/About";
import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";

export default function Home() {
  return (
    <>
      <div title="Home" id="home" style={{ height: 500 }}>
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
