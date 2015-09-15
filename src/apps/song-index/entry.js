"use strict"
const React           = require("react")
const style           = require("./style.css")
const SocialButton    = require("../../shared/socialButton/component")
const Header          = require("../../shared/header/component")
const Footer          = require("../../shared/footer/component")
const parseCollection = require("../../lib/parseCollection")
const ajax            = require("../../lib/ajax")

class RootComponent extends React.Component{
  constructor(){
    this.state = {
      collection: [],
    }

    ajax.get('/songs/songs.json', (payload) => {
      this.setState(processCollection(JSON.parse(payload)))
    })
  }

  render() {
    return <div style={{marginTop: '3em'}}>
      <Header />
      <Footer />
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
