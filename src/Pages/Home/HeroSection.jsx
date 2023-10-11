import { Link } from "react-scroll"
import React from "react"
import Typewriter from "typewriter-effect"

export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Marcus!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color typewriter--effect">
            <Typewriter
              options={{
                strings: ['Software Developer', 'Project Manager'],
                autoStart: true,
                pauseFor: 3000,
                loop: true,
              }}
            />
            </span>
          </h1>
          <br />
        </div>
        <div>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="/img/heroimage.png" alt="hero-img" />
      </div>
    </section>
  )
}