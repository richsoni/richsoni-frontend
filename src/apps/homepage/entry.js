"use strict"
const React           = require("react")
const headerStyle  = require("./header.css")
const baseStyle    = require("./base.css")
const Half         = require("./half")
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
      <Half style={{backgroundColor: 'blue'}}>
      </Half>
      <Half style={{backgroundColor: 'green'}}>
      </Half>
      <Half style={{backgroundColor: 'yellow'}}>
      </Half>
    </div>
//     return <div>
//       <Header />
//       <div id='homepage-header' style={{maxWidth: '100%', overflow: 'hidden'}}>
//         <nav className='top-nav' id='logo-nav'>
//           <img width='200' height='110' src='/images/avatar.png' />
//         </nav>
//         <nav className='top-nav' id='sign-up-nav'>
//           <li
//             id='sign-up-copy'
//             style={liStyle}
//           > Newsletter subscribers get a FREE and exclusive material... Including an UNRELEASED song immediately!!!  </li>
//           <SocialButton
//             href='http://richsoni.com/subscribe'
//             service='envelope'
//             style={liStyle}
//           >
//             Sign Up
//           </SocialButton>
//         </nav>
//       </div>
//       <Footer />
//     </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
