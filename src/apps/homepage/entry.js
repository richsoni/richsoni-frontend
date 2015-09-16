"use strict"
const React           = require("react")
const headerStyle  = require("./header.css")
const SocialButton = require("../../shared/socialButton/component")
const Header       = require("../../shared/header/component")
const Footer       = require("../../shared/footer/component")

class RootComponent extends React.Component{
  render() {
    let liStyle = {
      width: '100%',
      clear: 'both',
      textAlign: 'center',
    }

    return <div>
      <Header />
      <div id='homepage-header'>
        <nav className='top-nav' id='logo-nav'>
          <img src='/images/avatar.png' />
        </nav>
        <nav className='top-nav' id='sign-up-nav'>
          <li
            id='sign-up-copy'
            style={liStyle}
          > Newsletter subscribers get a FREE and exclusive material... Including an UNRELEASED song immediately!!!  </li>
          <SocialButton
            href='http://richsoni.com/subscribe'
            service='envelope'
            style={liStyle}
          >
            Sign Up
          </SocialButton>
        </nav>
      </div>
      <Footer />
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
