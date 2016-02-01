const React = require("react")
const Radium = require("radium")
const SocialButton    = require("../../shared/socialButton/component")
class _MailingListHalf extends React.Component{
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
module.exports = Radium(_MailingListHalf)