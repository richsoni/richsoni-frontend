"use strict"
const React           = require("react")
const Radium          = require("radium")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")

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
        fontFamily: "'Shadows Into Light', cursive",
        textAlign: 'center',
      }}>
        <h1> My Songs </h1>
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
    return <ul style={{
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
      { this.state.collection.map((song) => <Song filePrefix={song[0]} key={song[0]} {...song[1]} /> )}
    </ul>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
