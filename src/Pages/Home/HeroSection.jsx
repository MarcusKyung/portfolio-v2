import { Link } from "react-scroll"
import React from "react"
import Typewriter from "typewriter-effect"

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Marcus</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color typewriter--effect">
            <Typewriter
              options={{
                strings: ['> Front End Developer.', '> Project Manager.'],
                autoStart: true,
                pauseFor: 3000,
                loop: true,
              }}
            />
            </span>
          </h1>
          <br />
        </div>
        <Link spy={true} smooth={true} offset={-70} duration={500} to="Contact" className="btn btn-primary">Contact Me</Link>
      </div>
      <div className="hero--section--img">
        <img src="/img/hero_img.png" alt="hero-img" />
      </div>
    </section>
  )
}