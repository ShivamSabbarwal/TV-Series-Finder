import React, { Component } from "react"
import Main from "../Main"
import "./App.css"
import "whatwg-fetch"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">TV Series Finder</header>
        <Main />
      </div>
    )
  }
}

export default App
