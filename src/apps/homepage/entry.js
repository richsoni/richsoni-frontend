React       = require("react")
headerStyle = require("./header.css")

class SocialButton extends React.Component{
  render(){
    return <li
      className='social-button'
      style={this.props.style}
    >
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
  href:  React.PropTypes.string,
  style: React.PropTypes.string,
}
SocialButton.defaultProps = {
  style: {},
}

class RootComponent extends React.Component{
  render() {
    let liStyle = {
      width: '100%',
      clear: 'both',
      textAlign: 'center',
    }

    return <div>
      <header id='homepage-header'>
        <nav className='top-nav' id='social-nav'>
          <SocialButton service='soundcloud' href='https://soundcloud.com/richsoni' />
          <SocialButton service='twitter' href='https://twitter.com/richsoni'/>
          <SocialButton service='github' href='https://github.com/richsoni'/>
          <SocialButton service='linkedin' href='https://www.linkedin.com/in/richsoni'/>
        </nav>
        <nav className='top-nav' id='logo-nav'>
          <img src='/images/avatar.png' />
        </nav>
        <nav className='top-nav' id='internal-nav'>
          <li><a>Blog</a></li>
          <li><a>Songs</a></li>
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
      </header>
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
