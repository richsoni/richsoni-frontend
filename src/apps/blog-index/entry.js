"use strict"
const React        = require("react")
const style        = require("./style.css")
const SocialButton = require("../../shared/socialButton/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")

class Post extends React.Component {
  render(){
    const date = new Date(this.props.attributes.date)
    return <div className='index-post'>
      <h1> {this.props.attributes.title}</h1>
      <blockquote>{this.props.attributes.blurb}</blockquote>
      <div style={{backgroundImage: `url(${this.props.attributes.hero})`}} className='hero' />
      <div className='read'><i className='fa fa-book'/> Read</div>
    </div>
  }
}

class RootComponent extends React.Component{
  constructor(){
    this.state = {
      collection: [],
    }

    ajax.get('/blog/posts.json', (payload) => {
      this.setState(parseCollection(JSON.parse(payload)))
    })
  }

  render() {
    return <div style={{marginTop: '3em'}}>
      {this._renderHeader()}
      {this._renderPosts()}
      {this._renderFooter()}
    </div>
  }
  _renderPosts() {
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <div>
      { this.state.collection.map((post) => <Post key={post[0]} {...post[1]} /> )}
    </div>
  }

  _renderHeader() {
    return <header>
      <span id='logo'>{"{ RichSoni }"}</span>
      <nav>
        <li><a href='/blog'>Blog</a></li>
        <li><a href='/songs'>Songs</a></li>
      </nav>
    </header>
  }

  _renderFooter() {
    return <footer>
      <nav className='social-buttons'>
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
      <div className='copyright'>Copyright {new Date().getFullYear()} RichSoni, LLC</div>
    </footer>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
