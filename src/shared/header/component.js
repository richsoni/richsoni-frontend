"use strict"
const React = require('react')
css         = require("./style.css")
class Header extends React.Component {
  render() {
    return <div style={{display: 'block', height: '3em'}}>
      <header>
        <span id='logo'>{"{ RichSoni }"}</span>
        <nav>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/songs'>Songs</a></li>
        </nav>
      </header>
    </div>
  }
}

module.exports = Header
