"use strict"
const React        = require('react')
const SocialButton = require("../../shared/socialButton/component")

class Footer extends React.Component {
  render() {
    return <footer
      style={{
        display: 'block',
        position: 'fixed',
        backgroundColor: '#000',
        overflow: 'hidden',
        color: '#fff',
        width: '100%',
        bottom: 0,
        left: 0,
        boxShadow: '0 -3px 14px rgba(0, 0, 0, 0.35)',
      }}
    >
      <nav className='social-buttons'
        style={{
          display: 'block',
          width: '100%',
          clear: 'both',
          textAlign: 'center',
          fontSize: '.75em',
        }}
      >
        <SocialButton style={{display: 'inline-block'}} service='soundcloud' href='https://soundcloud.com/richsoni' />
        <SocialButton style={{display: 'inline-block'}} service='twitter' href='https://twitter.com/richsoni'/>
        <SocialButton style={{display: 'inline-block'}} service='github' href='https://github.com/richsoni'/>
        <SocialButton style={{display: 'inline-block'}} service='linkedin' href='https://www.linkedin.com/in/richsoni'/>
        <SocialButton
          href='http://richsoni.com/subscribe'
          service='envelope'
        >
          &nbsp;Sign Up
        </SocialButton>
      </nav>
      <div style={{
        display: 'block',
        width: '100%',
        clear: 'both',
        textAlign: 'center',
        fontSize: '.75em',
        marginTop: '.5em',
      }}>Copyright {new Date().getFullYear()} RichSoni, LLC</div>
    </footer>
  }
}

module.exports = Footer
