import React, { Component } from 'react'
import './Work.css'

class Work extends Component {
  render() {
    return (
      <div className="work">
        <div className="project">
          <div className="project-left">
            <img src={require('../images/readable-mock.jpg')} alt="" />
          </div>
          <div className="project-right">
            <h2>readable</h2>
            <h4>Developer</h4>
            <small>2017</small>
            <p>React / Redux</p>
            <p>
              Reddit style content and comment site with vote scoring. Posts and
              comments are automatically sorted by votes, and can be sorted by
              date as well.
            </p>
            <a
              href="https://github.com/Courtney2511/readable"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-lg" aria-hidden="true" /> see the code
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-left">
            <img src={require('../images/myreads-mock.jpg')} alt="" />
          </div>
          <div className="project-right">
            <h2>myReads</h2>
            <h4>Developer</h4>
            <small>2017</small>
            <p>React</p>
            <p>Virtual bookshelf SPA.</p>
            <a
              href="https://www.github.com/Courtney2511/myreads"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-lg" aria-hidden="true" /> see the code
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-left">
            <img src={require('../images/photobomb-mock.jpg')} alt="" />
          </div>
          <div className="project-right">
            <h2>Photobomb</h2>
            <h4>Developer / Database Design</h4>
            <small>2017</small>
            <p>Python / Flask / React / Redux</p>
            <p>
              Photobomb allows users to share photos online. The frontend
              React/Redux application is served data by a Python / Flask API.
              Utilizes Facebook Login
            </p>
            <a
              href="https://github.com/Courtney2511/item_catalogue"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-lg" aria-hidden="true" /> see the code
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-left">
            <img src={require('../images/map-project-mock.jpg')} alt="" />
          </div>
          <div className="project-right">
            <h2>Neighbourhood Map</h2>
            <h4>Developer</h4>
            <small>2017</small>
            <p>
              Javascript / Knockout.js / Google Maps API / Facebook Places API
            </p>
            <p>
              Local restaurants are displayed on Google Maps, with additional
              information provided by Facebook Places. Locations can be filtered
              which updates the map.
            </p>
            <a
              href="https://github.com/Courtney2511/map_project"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-lg" aria-hidden="true" /> see the code
            </a>
          </div>
        </div>
        <div className="project">
          <div className="project-left">
            <img src={require('../images/multiblog-mock.jpg')} alt="" />
          </div>
          <div className="project-right">
            <h2>MultiBlog</h2>
            <h4>Developer</h4>
            <small>2017</small>
            <p>Python / Google App Engine</p>
            <p>
              Multi User blogging application with commenting. Users can like
              each others posts.
            </p>
            <a
              href="https://github.com/Courtney2511/multi_user_blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fa fa-github fa-lg" aria-hidden="true" /> see the code
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Work
