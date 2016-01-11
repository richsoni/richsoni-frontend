"use strict"
const React           = require("react")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const PostPreview     = require("./post-preview")

let postComponents = {
  preview: PostPreview,
  grid: PostPreview,
  list: PostPreview,
}

class RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
      currentView: 'preview',
    }
    ajax.get('/blog/posts.json', (payload) => {
      this.setState(parseCollection(JSON.parse(payload)))
    })
  }

  render() {
    return <div style={{
      paddingTop: '5em',
      paddingBottom: '2em',
      backgroundColor: '#232323',
    }}>
      <Header />
      <div style={{
        maxWidth: 960,
        margin: 'auto auto',
        padding: '2em',
        backgroundColor: '#ffffff',
      }}>
        <div style={{
          width: '100%',
          borderBottom: '1px solid #bebebe',
          paddingBottom: '.5em',
          maxWidth: 650,
          margin: 'auto auto',
          minHeight: '1em',
          overflow: 'hidden',
        }}>
          <div style={{float: 'left', lineHeight: '2em', width: '3em'}}>Latest</div>
          <div style={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'flex-end',
          }}
            className='hoverFade'
          >
            {this.renderControl('preview', 'fa-align-justify')}
            {this.renderControl('tile', 'fa-th')}
            {this.renderControl('list', 'fa-list-ul')}
          </div>
        </div>
        {this._renderPosts()}
      </div>
      <Footer />
    </div>
  }

  renderControl(type, icon){
    if( type === this.state.currentView ){
      return <span className="fa-stack">
        <i
          style={{color: '#7b7b7b'}}
          className="fa fa-circle fa-stack-2x"></i>
        <i className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
      </span>
    }
    return <span style={{
      fontWeight: 'normal',
      cursor: 'pointer',
      }}
      className="fa-stack pulse inactive"
      onClick={() => {this.setState({currentView: type})}}
    >
      <i
        style={{color: '#fff'}}
        className="fa fa-circle fa-stack-2x"></i>
      <i
        style={{color: '#7b7b7b'}}
        className={`fa ${icon} fa-stack-1x fa-inverse`}></i>
    </span>
  }

  _renderPosts() {
    const Component = postComponents[this.state.currentView]
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <div>
      { this.state.collection.map((post) => <Component key={post[0]} filePrefix={post[0]} {...post[1]} /> )}
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
