"use strict"
const React           = require("react")
const style           = require("./style.css")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Disqus          = require("../../shared/disqus/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const KEY             = window.location.pathname.replace('/blog/posts/','').replace('.html','')

class RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
    }

    ajax.get('/blog/posts.json', (payload) => {
      const posts = JSON.parse(payload)
      this.setState(parseCollection(posts, 'ASC'))
      this.setState({post: posts[KEY]})
    })
  }

  render() {
    return <div style={{marginTop: '5em'}}>
      <Header />
      {this.renderPost()}
      <Footer />
    </div>
  }

  renderPost() {
    if( this.state.post ){
      const d = new Date()
      return <div className='post'>
        <div className='post-heading'>
          <h3>{d.getMonth()}/{d.getDay()}/{d.getFullYear()}</h3>
          <h1 className='title'>{this.state.post.attributes.title}</h1>
        </div>
        <div className='hero' style={{backgroundImage: `url(${this.state.post.attributes.hero})`}} />
        <div className='blog-post-body' dangerouslySetInnerHTML={{__html: this.state.post.body}} />
        <hr />
        <h1>Comments</h1>
        <Disqus />
      </div>
    }
    return <div />
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
