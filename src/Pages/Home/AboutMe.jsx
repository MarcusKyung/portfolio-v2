import { Link } from "react-scroll";

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/codesnip.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          {/* <p className="section--title">About</p> */}
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description italic--text">Software Developer, Project Manager, & Marketer.</p>
          <p>Hello! I'm a Front-End Developer with a passion for solving life's problems through code.</p>
          <p>
            I've spent the past several years working in at marketing agencies and non-profits. I've worked with a variety of clients, from small businesses to large corporations, and I've learned a lot along the way. 
          </p>
          <p>
            Have a job opening or want to collaborate on a project? Drop me a line using the <Link spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="navbar--content contact--link">contact form here!</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
