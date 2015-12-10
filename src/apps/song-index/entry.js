"use strict"
const React           = require("react")
const style           = require("./style.css")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const SoundCloudPlaylist = require("../../shared/soundcloud/playlist")


class Song extends React.Component {
  render(){
    console.log(this.props.attributes)
    let link;
    if(this.props.attributes.soundcloud){
      link = <a className='fa fa-soundcloud' href={this.props.attributes.soundcloud} />
    } else {
      link = <div />
    }
    return <tr>
        <td>{link}</td>
        <td><a href={`./${this.props.filePrefix}.html`}>{this.props.attributes.title}</a></td>
    </tr>
  }
}

class RootComponent extends React.Component{
  constructor(){
    super()
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
        <SoundCloudPlaylist playlistId='145493634' />
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
    return <table className='index-songs'>
      { this.state.collection.map((song) => <Song filePrefix={song[0]} key={song[0]} {...song[1]} /> )}
    </table>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
