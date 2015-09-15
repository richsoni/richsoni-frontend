"use strict"
const React           = require("react")
const style           = require("./style.css")
const SocialButton    = require("../../shared/socialButton/component")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")

class Song extends React.Component {
  render(){
    return <li className='index-song'>
      {this.props.attributes.title}
    </li>
  }
}

class RootComponent extends React.Component{
  constructor(){
    this.state = {
      collection: [],
    }

    ajax.get('/songs/songs.json', (payload) => {
      this.setState(parseCollection(JSON.parse(payload), 'ASC'))
    })
  }

  render() {
    return <div style={{marginTop: '3em'}}>
      <Header />
      {this._renderSongs()}
      <Footer />
    </div>
  }

  _renderSongs() {
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <ul>
      { this.state.collection.map((song) => <Song key={song[0]} {...song[1]} /> )}
    </ul>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
