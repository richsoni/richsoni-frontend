"use strict"
const React = require('react')
css         = require("./style.css")

class Footer extends React.Component {
  render() {
    return <footer>
      <nav className='social-buttons'>
        <SocialButton service='soundcloud' href='https://soundcloud.com/richsoni' />
        <SocialButton service='twitter' href='https://twitter.com/richsoni'/>
        <SocialButton service='github' href='https://github.com/richsoni'/>
        <SocialButton service='linkedin' href='https://www.linkedin.com/in/richsoni'/>
        <SocialButton
          href='http://richsoni.com/subscribe'
          service='envelope'
        >
          &nbsp;Sign Up
        </SocialButton>
      </nav>
      <div className='copyright'>Copyright {new Date().getFullYear()} RichSoni, LLC</div>
    </footer>
  }
}

module.exports = Footer
