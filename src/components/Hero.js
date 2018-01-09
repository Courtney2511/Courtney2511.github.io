import React, { Component } from 'react'
import './Hero.css'

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <h1 id="hi">hello :)</h1>
        <h1>I'm Courtney.</h1>
        <span>
          <h1 id="highlight">{` { FULL STACK } `}</h1>
          <h1> Web Developer</h1>
        </span>
        <div className="social">
          <a href="https://github.com/Courtney2511" target="_blank">
            <i class="fa fa-github-square" aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/courtneynoonan2511/"
            target="_blank"
          >
            <i class="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="mailto:courtneynoonan@me.com">
            <i class="fa fa-envelope" aria-hidden="true" />
          </a>
        </div>
      </div>
    )
  }
}

export default Hero
