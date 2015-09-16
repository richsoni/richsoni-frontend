"use strict"
const React = require("react")
const css = require("./style.css")
class SocialButton extends React.Component{
  render(){
    return <li
      className='social-button'
      style={this.props.style}
    >
      <a
        title={this.props.service}
        href={this.props.href}
      >
        <i className={`fa fa-${this.props.service}`}></i>
        <span>{this.props.children}</span>
      </a>
    </li>
  }
}

SocialButton.propTypes = {
  service: React.PropTypes.string,
  href:  React.PropTypes.string,
  style: React.PropTypes.string,
}
SocialButton.defaultProps = {
  style: {},
}

module.exports = SocialButton
