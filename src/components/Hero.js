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
      </div>
    )
  }
}

export default Hero
