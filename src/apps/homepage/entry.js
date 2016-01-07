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
    return <div id='homepage-header' style={{
        maxWidth: '100%',
        overflow: 'hidden',
        width: '1450px',
        padding: '1em',
        display:'flex',
        justifyContent: 'flex-end',
      }}>
        <div
          style={{
            listStyle: 'none',
          }}
        >
          <h1 style={{color: '#FFED88'}}>Join My Mailing List,</h1>
          <h3 style={{color: '#CEB8FF'}}>Because I would like you to join my mailing list</h3>
          <SocialButton
            href='http://richsoni.com/subscribe'
            service='envelope'
          >
            <span style={{marginLeft: 10}}>Sign Up</span>
          </SocialButton>
      </div>
    </div>
  }
}

class RootComponent extends React.Component{
  render() {
    // <Half style={{backgroundColor: 'black'}}>Latest Youtube Videos</Half>
    return <div>
      <Header />
      <Half style={{backgroundImage: 'url(/images/stv1bgt.png)', backgroundColor: '#232323', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}><MailingListHalf /></Half>
      <Half style={{backgroundColor: '#FF5F5F'}}><Dylcember /></Half>
      <Half style={{backgroundImage: 'url(/images/stv1bg.png)', backgroundColor: '#345288', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}><SafetyTapesVol1 /></Half>
      <Footer />
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
