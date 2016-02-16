"use strict"
const React           = require("react")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const Disqus          = require("../../shared/disqus/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const KEY             = window.location.pathname.replace('/songs/','').replace('.html','')

class RootComponent extends React.Component{
  constructor(){
    super()
    this.state = {
      collection: [],
    }

    ajax.get('/songs/songs.json', (payload) => {
      const songs = JSON.parse(payload)
      this.setState(parseCollection(songs, 'ASC'))
      this.setState({song: songs[KEY]})
    })
  }

  render() {
    console.log(this.state.song)
    return <div style={{marginTop: '5em'}}>
      <Header />
      <div style={{
        backgroundColor: 'white',
        maxWidth: 960,
        margin: 'auto auto',
        fontFamily: "'Shadows Into Light', cursive",
        textAlign: 'center',
        padding: '1em',
      }}>
        {this.renderSong()}
      </div>
      <Footer />
    </div>
  }

  renderSong() {
    if( this.state.song ){
      return <div style={{
        textAlign: 'center',
      }}>
        {this.renderSoundcloud()}
        <div dangerouslySetInnerHTML={{__html: this.state.song.body}} />
        <hr />
        <h3>Comments</h3>
        <Disqus />
      </div>
    }
    return <div />
  }

  renderSoundcloud() {
    if(this.state.song.attributes.soundcloud){
      return <SoundcloudPlayer url={this.state.song.attributes.soundcloud} />
    } else {
      return <h1 style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}> {this.state.song.attributes.title} </h1>
    }
  }
}

module.exports = RootComponent
