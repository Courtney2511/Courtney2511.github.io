import React, { Component } from 'react'
import './Work.css'

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="project">
          <div className="project-left">
            <img src={require('../images/readable-mock.jpg')} />
          </div>
          <div className="project-right">
            <h2>readable</h2>
            <h4>Developer</h4>
            <small>2017</small>
            <p>React / Redux</p>
          </div>
        </div>
        <div className="project">
          <div className="project-left">
            <img src={require('../images/myreads-mock.jpg')} />
          </div>
          <div className="project-right">
            <h2>myReads</h2>
            <h4>Developer</h4>
            <small>2017</small>
            <p>React</p>
          </div>
        </div>
        <div className="project">
          <div className="project-left">
            <img src={require('../images/myreads-mock.jpg')} />
          </div>
          <div className="project-right">
            <h2>Photobomb</h2>
            <h4>Developer / Database Design</h4>
            <small>2017</small>
            <p>Python / Flask / React / Redux</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
