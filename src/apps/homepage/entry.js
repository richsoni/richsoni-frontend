"use strict"
const React           = require("react")
const headerStyle     = require("./header.css")
const baseStyle       = require("./base.css")
const Half            = require("./half")
const SocialButton    = require("../../shared/socialButton/component")
const Dylcember       = require("./dylcember")
const SafetyTapesVol1 = require("./safetyTapesVol1")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")

class MailingListHalf extends React.Component{
  render(){
    let liStyle = {
      width: '100%',
      clear: 'both',
      textAlign: 'center',
    }

    return <div>
      <div id='homepage-header' style={{maxWidth: '100%', overflow: 'hidden'}}>
        <nav className='top-nav' id='logo-nav'>
          <img width='200' height='110' src='/images/avatar.png' />
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
    </div>
  }
}

class RootComponent extends React.Component{
  render() {
    // <Half style={{backgroundColor: 'black'}}>Latest Youtube Videos</Half>
    return <div>
      <Header />
      <Half style={{backgroundImage: 'url(/images/stv1bgt.png)', backgroundColor: '#232323', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></Half>
      <Half style={{backgroundColor: '#FF5F5F'}}><Dylcember /></Half>
      <Half style={{backgroundImage: 'url(/images/stv1bg.png)', backgroundColor: '#345288', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}><SafetyTapesVol1 /></Half>
      <Half style={{backgroundColor: 'white'}}><MailingListHalf /></Half>
      <Footer />
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
