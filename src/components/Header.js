import React, { Component } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-left">
          <h3>
            <Link to="/">COURTNEY NOONAN</Link>
          </h3>
        </div>
        <div className="header-right">
          <ul className="nav">
            <li>
              <Link to="/work" id="work">
                WORK
              </Link>
            </li>
            <li>
              <Link to="/about" id="about">
                ABOUT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
