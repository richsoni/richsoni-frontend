"use strict"
const React           = require("react")
const headerStyle     = require("./header.css")
const baseStyle       = require("./base.css")
const Half            = require("../../shared/half")
const Dylcember       = require("./dylcember")
const SafetyTapesVol1 = require("./safetyTapesVol1")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Radium          = require("radium")
const MailingListHalf = require("./mailinglist")


class _RootComponent extends React.Component{
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
const RootComponent = Radium(_RootComponent)

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
