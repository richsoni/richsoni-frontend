React       = require("react")
headerStyle = require("./header.css")

class SocialButton extends React.Component{
  render(){
    return <li>
      <a
        title={this.props.service}
        href={this.props.href}
      >
        <i className={`fa fa-${this.props.service}`}></i>
        <span>{this.props.children}</span>
      </a>
    </li>
  }
}

SocialButton.propTypes = {
  service: React.PropTypes.string,
  href: React.PropTypes.string,
}

class RootComponent extends React.Component{
  render() {
    return <header id='homepage-header'>
      <nav className='top-nav' id='social-nav'>
        <SocialButton service='soundcloud' href='https://soundcloud.com/richsoni' />
        <SocialButton service='twitter' href='https://twitter.com/richsoni'/>
        <SocialButton service='github' href='https://github.com/richsoni'/>
        <SocialButton service='linkedin' href='https://www.linkedin.com/in/richsoni'/>
      </nav>
      <nav className='top-nav' id='internal-nav'>
        <li id='logo'></li>
        <li>Blog</li>
        <li>Songs</li>
      </nav>
      <nav className='top-nav' id='sign-up-nav'>
        <SocialButton href='http://richsoni.com/subscribe' service='envelope'>
          Sign Up
        </SocialButton>
      </nav>
    </header>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
