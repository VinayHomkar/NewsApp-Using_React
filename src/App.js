import './App.css';
import React, { Component } from 'react'
export default class App extends Component {
  name = "Vinay"
  render() {
    return (
      <div>
        Hello {this.name}
      </div>
    )
  }
}


