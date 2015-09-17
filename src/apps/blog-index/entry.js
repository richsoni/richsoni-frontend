"use strict"
const React           = require("react")
const style           = require("./style.css")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")

class Post extends React.Component {
  render(){
    const url = `./posts/${this.props.filePrefix}.html`
    return <div className='index-post'>
      <h1> <a href={url}> {this.props.attributes.title} </a></h1>
      <blockquote>{this.props.attributes.blurb}</blockquote>
      <a style={{backgroundImage: `url(${this.props.attributes.hero})`}} className='hero' href={url} />
      <a href={url} className='read'><i className='fa fa-book'/> Read</a>
    </div>
  }
}

class RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
    }

    ajax.get('/blog/posts.json', (payload) => {
      this.setState(parseCollection(JSON.parse(payload)))
    })
  }

  render() {
    return <div style={{marginTop: '3em'}}>
      <Header />
      {this._renderPosts()}
      <Footer />
    </div>
  }
  _renderPosts() {
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <div>
      { this.state.collection.map((post) => <Post key={post[0]} filePrefix={post[0]} {...post[1]} /> )}
    </div>
  }


}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
