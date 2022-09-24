import React, { Component } from 'react'
import './style.css'
export class Navbar extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: 'My TODO List'
      }
    }
  render() {
    return (
      <nav className='navbar'>
        {this.state.name}
      </nav>
    )
  }
}

export default Navbar