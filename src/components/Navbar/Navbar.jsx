import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './Navbar.css'
import { Button } from '../Button/Button'

export default class Navbar extends Component {
  state = {
    cliked: false,
  }

  handleClick = () => {
    this.setState({
      cliked: !this.state.cliked,
    })
  }

  render() {
    return (
      <nav className="navbar-item">
        <h1 className="navbar-logo">
          Impelsy <i className="fa fa-low-vision"></i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.cliked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={this.state.cliked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.className} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
        <Button>Sign Up</Button>
      </nav>
    )
  }
}
