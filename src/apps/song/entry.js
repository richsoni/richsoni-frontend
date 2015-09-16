"use strict"
const React           = require("react")
const style           = require("./style.css")
const SocialButton    = require("../../shared/socialButton/component")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")
const KEY             = window.location.pathname.replace('/songs/','').replace('.html','')

const SOUNDCLOUD_BASE = "https://w.soundcloud.com/player/?url="
const SOUNDCLOUD_OPTIONS = {
  color: "000000",         // color=(hex code without #, like 33ff00) color play button and other controls
  theme_color: "ffffff",   // theme_color=(hex code without #, like 33ff00) color player background etc.
  auto_play: false,        // auto_play=true/false
  show_artwork: false,     // show_artwork=true/false
  show_playcount: true,    // show_playcount=true/false
  show_bpm: false,         // show_bpm=true/false
  show_comments: false,    // show_comments=true/false
  buying: false,           // buying = true/false (show hide buy buttons)
  sharing: true,           // sharing = true/false (show hide share buttons)
  download: true,          // download = true/false (show hide download buttons)
  show_user: false,        // show_user = true/false (show or hide the uploader name, useful e.g. in tiny players to save space)
  single_active: true,     // single_active = true/false (if set to false the multiple players on the page won’t toggle each other off when playing)
  //text_buy_track: 'buy', //text_buy_track = string (e.g. ‘Tweet’ and it points to your ‘buy’ link)
  //text_buy_set: ,        //text_buy_set = string (e.g. ‘Tweet’ and it points to your ‘buy’ link)
  //text_download_track: , //text_download_track = string (e.g. ‘Get it’ and it points to your ‘download’ link)
  //start_track: ,         //start_track = (a number from 0 to the playlist length) preselects a track in a playlist
  //default_width: ,       //default_width = (a number e.g. 400) overrides the player’s autoscale, useful when embedding in other flash movies
  //default_height: ,      //default_height = (a number e.g. 500) overrides the player’s autoscale, useful when embedding in other flash movies
  //font: ,                //font = (a string e.g. Arial) overrides the default font with system font
  //enable_api: ,          //enable_api = true/false (enable JS api callbacks, please refer to http://wiki.github.com/soundcloud/Widget-JS-API/ for docs)
}
const SOUNDCLOUD_QUERY=Object
  .keys(SOUNDCLOUD_OPTIONS)
  .map((key) => `${key}=${SOUNDCLOUD_OPTIONS[key]}`)
  .join('&amp;')

const buildSoundCloudURL = function(url){
  return `${SOUNDCLOUD_BASE}${url}&amp;${SOUNDCLOUD_QUERY}`
}

class SoundcloudPlayer extends React.Component{
  render(){
    return <iframe
      width="100%"
      style={{maxWidth: 400}}
      height="166"
      scrolling="no"
      frameborder="no"
      src={buildSoundCloudURL(this.props.url)}
    />
  }
}

class RootComponent extends React.Component{
  constructor(){
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
    return <div style={{marginTop: '3em'}}>
      <Header />
      {this.renderSong()}
      <Footer />
    </div>
  }

  renderSong() {
    if( this.state.song ){
      return <div className='song'>
        {this.renderSoundcloud()}
        <div dangerouslySetInnerHTML={{__html: this.state.song.body}} />
      </div>
    }
    return <div />
  }

  renderSoundcloud() {
    if(this.state.song.attributes.soundcloud){
      return <SoundcloudPlayer url={this.state.song.attributes.soundcloud} />
    } else {
      return <h1> {this.state.song.attributes.title} </h1>
    }
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
