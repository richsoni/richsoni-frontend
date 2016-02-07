"use strict"
const React           = require("react")
const Radium          = require("radium")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const releases        = require("../../data/releases")
const ajax            = require("../../lib/ajax")
const moment          = require('moment')

class _Album extends React.Component {
  render(){
    const size=200;
    return <div
        style={{
          width: size,
          textAlign: 'center',
        }}
      >
      <div style={{
        width:size,
        height:size,
        border: '1px solid #bebebe',
        backgroundImage: `url(${this.props.artwork})`,
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}>
        {this._renderLinks()}
      </div>
      <div
        style={{
          marginTop: '.2em',
        }}
      >
        {this.props.title}
      </div>
    </div>
  }

  _renderLinks(){
    return this.props.links.map((link) => {
      return <a href={link.href}><i className={`fa fa-${link.fa}`}/></a>
    })
  }
}

_Album.defaultProps = {
  image: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
}
const Album = Radium(_Album)

class _Song extends React.Component {
  render(){
    return <li style={{
        color: '#000',
        fontSize: '1.5em',
        padding: '.2em',
      }}>
        <a style={{
          color: '#000',
          ':hover': {
            color: '#000',
          }
          }}
          key={this.props.filePrefix}
          href={`./${this.props.filePrefix}.html`}>{this.props.attributes.title}</a>
    </li>
  }
}
const Song = Radium(_Song)

class Heading extends React.Component{
  render(){
    return <h1 style={{
      borderBottom: '1px solid #bebebe',
      color: '#333333',
    }}
    >{this.props.children}</h1>
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
    return <div style={{
      paddingTop: '5em',
      paddingBottom: '2em',
      backgroundColor: '#232323',
    }}>
      <Header />
      <div style={{
        backgroundColor: 'white',
        maxWidth: 960,
        margin: 'auto auto',
        textAlign: 'left',
        padding: '1em',
      }}>
        <Heading>Safety Tapes</Heading>
        {this._renderCategory("Safety Tapes")}
        <Heading>Live Bootlegs</Heading>
        {this._renderCategory("Live Bootlegs")}
        <Heading>Video</Heading>
        <Heading>All Songs</Heading>
        {this._renderSongs()}
      </div>
      <Footer />
    </div>
  }

  _renderCategory(category){
    let x = moment('12/12/12')
    const albums = releases
      .filter((release) => release.category == category)
      .map((release) => <Album {...release} />)
    return <div
        style={{
          display: 'flex',
          flexFlow: 'row wrap',
        }}
      >
      {x}
      {albums}
    </div>
  }

  _renderSongs() {
    if (this.state.collection.length === 0){
      return <div>
        loading
      </div>
    }
    return <ul style={{
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
      { this.state.collection.map((song) => <Song filePrefix={song[0]} key={song[0]} {...song[1]} /> )}
    </ul>
  }
}

module.exports = RootComponent
