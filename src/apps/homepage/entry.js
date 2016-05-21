"use strict"
const React           = require("react")
const Half            = require("../../shared/half")
const LatestRelease   = require("./LatestRelease")
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
      <Half>
        <div style={{
          backgroundImage: 'url(/images/jsf.png)',
          width: '100%',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '50vh',
          backgroundPosition: 'center',
          backgroundColor: '#A0BCD6',
        }}/>
      </Half>
      <Half style={{backgroundImage: 'url(/images/stv1bgt.png)', backgroundColor: '#232323', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}><MailingListHalf /></Half>
      <Half style={{backgroundImage: 'url(/images/stv3bg.png)', backgroundPosition: 'center center', backgroundColor: '#12002F', backgroundRepeat: 'no-repeat', backgroundSize:'cover'}}><LatestRelease /></Half>
      <Footer />
    </div>
  }
}
const RootComponent = Radium(_RootComponent)

module.exports = RootComponent
