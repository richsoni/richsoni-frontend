"use strict"
const React           = require("react")
const Half            = require("../../shared/half")
const SafetyTapesVol2 = require("./safetyTapesVol2")
const AngelsShare     = require("./angelsShareComponent")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Radium          = require("radium")
const Style = Radium.Style;
const MailingListHalf = require("./mailinglist")


class _RootComponent extends React.Component{
  render() {
    // <Half style={{backgroundColor: 'black'}}>Latest Youtube Videos</Half>
    return <div>
      <Style rules={{
        body: {
          maxWidth: 'none',
        },

        nav: {
          listStyle: 'none',
        },

      }}>
      </Style>
      <Header />
      <Half style={{backgroundImage: 'url(/images/stv1bgt.png)', backgroundColor: '#232323', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}><MailingListHalf /></Half>
      <Half style={{backgroundImage: 'url(/images/stv2bg.jpg)', backgroundPosition: 'center center', backgroundColor: '#12002F', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}><SafetyTapesVol2 /></Half>
      <Footer />
    </div>
  }
}
const RootComponent = Radium(_RootComponent)

module.exports = RootComponent
