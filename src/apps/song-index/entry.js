"use strict"
const React           = require("react")
const style           = require("./style.css")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")

const SOUNDCLOUD_BASE = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/145493634&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"

class Song extends React.Component {
  render(){
    return <li>
      <a href={`./${this.props.filePrefix}.html`}>{this.props.attributes.title}</a>
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
    return <div className='song-index-wrap'>
      <Header />
      <div className='playlist-container'>
        <h2>Featured</h2>
        <iframe height='100%' scrolling="no" frameborder="no" src={SOUNDCLOUD_BASE}></iframe>
      </div>
      <div className='songs-container'>
        <h2>All Songs</h2>
        {this._renderSongs()}
      </div>
      <Footer />
    </div>
  }

  _renderSongs() {
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <ul className='index-songs'>
      { this.state.collection.map((song) => <Song filePrefix={song[0]} key={song[0]} {...song[1]} /> )}
    </ul>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
