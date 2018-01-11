import React, { Component } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './containers/About'
import Work from './containers/Work'
import 'normalize.css/normalize.css'
import './App.css'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route exact path="/" component={Hero} />
      </div>
    )
  }
}

export default App
