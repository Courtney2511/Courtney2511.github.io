import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="content">
          <p>My name is Courtney, Sales Professional turned Developer.</p>
          <p>
            I started my web development journey with the Full Stack Web
            Development Intensive at Bitmaker in Toronto. After completion of
            the program, I wanted to continue working on my development skills
            so I completed two nanodegrees through Udacity: Full Stack Web
            Development and React.
          </p>
          <p>
            A problem solver at heart, I love working through interesting
            challenges and I am always looking for the best solution.
          </p>
          <p>
            When I'm not working behind my laptop, I like to spend my time
            working on my yoga practice and spending as much time in the
            outdoors as possible. Sailing Lake Simcoe and hiking are a couple of
            my favourite activities.
          </p>
        </div>
      </div>
    )
  }
}

export default About
