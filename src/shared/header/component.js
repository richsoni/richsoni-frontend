"use strict"
const React = require('react')
const css         = require("./style.css")
class Header extends React.Component {
  render() {
    return <div style={{display: 'block', height: '5.4em'}}>
      <header>
        <a href='/' id='logo'>{"{ RichSoni }"}</a>
        <nav>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/songs'>Songs</a></li>
        </nav>
      </header>
    </div>
  }
}

module.exports = Header
