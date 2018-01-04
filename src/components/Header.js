import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <h3>COURTNEY NOONAN</h3>
        </div>
        <div className="header-right">
          <ul className="nav">
            <li id="contact">CONTACT</li>
            <li id="work">WORK</li>
            <li id="about">ABOUT</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
