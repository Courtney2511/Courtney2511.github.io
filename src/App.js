import React, { Component } from 'react'
import logo from './logo.svg'
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

// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
