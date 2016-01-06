"use strict"
const React       = require('react')
const css         = require("./style.css")
const WindowStore = require("../../stores/windowStore")
const SocialButton = require("../../shared/socialButton/component")

const getWindowState = () => {
  return {
    isSmall: WindowStore.isSmall
  }
}

class Small extends React.Component {
  constructor(attrs){
    super()
    this.state = {
      showMenu: false
    }
  }
  render(){
    return <header
          style={{
            fontSize: '1.5em'
          }}
        >
        <div style={{
          display: 'flex',
          position: 'absolute',
          width: '100%',
          backgroundColor: 'black',
          top: 0,
          left: 0,
          justifyContent: 'center',
          alignItems: 'center',
          height: '2.9em',
        }}>
          <a
            style={{
              textDecoration: 'none',
              color: 'white',
            }}
            className='pulse'
            href='/'>{"{ RichSoni }"}</a>
        </div>
        <a
          style={{
            position: 'fixed',
            display: 'block',
            top: 0,
            right: 0,
            zIndex: 4,
            height: '2.5em',
            cursor: 'pointer',
            color: 'white',
          }}
          onClick={this.toggleMenu.bind(this)}
        >
          <span
            className="fa-stack fa-lg pulse"
          >
            <i className="fa fa-circle fa-stack-2x"></i>
            <i
              className='fa fa-reorder fa-stack-1x'
              style={{
                color: 'black',
                transitionProperty: 'font-size',
                transitionDuration: '.5s',
                fontSize: this.state.showMenu ? 0 : '1em',
              }}
            ></i>
            <i
              className='fa fa-close fa-stack-1x'
              style={{
                color: 'black',
                transitionProperty: 'font-size',
                transitionDuration: '.5s',
                fontSize: this.state.showMenu ? '1em' : 0,
              }}
            ></i>
          </span>
        </a>
        <nav
          style={{
            backgroundColor: 'black',
            color: 'white',
            width: '100%',
            position: 'fixed',
            top: !this.state.showMenu ? '-10000' : 0,
            height: '100%',
            overflow: 'hidden',
            zIndex: 3,
            paddingTop: '4em',
            transitionProperty: 'top',
            transitionDuration: '.5s',
            display: 'flex',
            width: '100%',
            justifyContent: 'flex-start',
            alignItems: 'center',
            flexDirection:  'column',
          }}
        >
          <a href='/blog'>Blog</a>
          <a href='/songs'>Songs</a>
          <nav
            style={{
              marginTop: '3em',
              width: '100%',
              fontSize: '.8em',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <SocialButton service='soundcloud' href='https://soundcloud.com/richsoni' />
            <SocialButton service='twitter' href='https://twitter.com/richsoni'/>
            <SocialButton service='github' href='https://github.com/richsoni'/>
            <SocialButton service='linkedin' href='https://www.linkedin.com/in/richsoni'/>
            <SocialButton
              href='http://richsoni.com/subscribe'
              service='envelope'
            >
              &nbsp;Sign Up
            </SocialButton>
          </nav>
          <div style={{fontSize: '.4em'}}>Copyright {new Date().getFullYear()} RichSoni, LLC</div>
        </nav>
    </header>
  }

  toggleMenu(){
    this.setState({
      showMenu: !this.state.showMenu,
    })
  }
}

class Big extends React.Component {
  render(){
    return <div style={{display: 'block', height: '5.4em'}}>
      <header>
        <a href='/' id='logo'>{"{ RichSoni }"}</a>
        <nav>
          <li><a href='/blog'>Blog</a></li>
          <li><a href='/songs'>Songs</a></li>
        </nav>
      </header>
    </div>
  }
}

class Header extends React.Component {
  constructor(attrs){
    super(attrs)
    this.state = getWindowState()
  }

  componentDidMount(){
    WindowStore.addChangeListener(this._onChange.bind(this))
  }

  _onChange(){
    this.setState(getWindowState())
  }

  render() {
    if(this.state.isSmall){
      return <Small />
    }
    else {
      return <Small />
    }
  }
}

module.exports = Header
