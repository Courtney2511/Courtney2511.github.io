import React, { Component } from 'react'
import './Work.css'

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="project">
          <div className="project-left">
            <img src="../images/hiking-gold.jpg" />
          </div>
          <div className="project-right">
            <h2>Project Name</h2>
            <h4>Role, and stuff</h4>
            <small>year completed</small>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
