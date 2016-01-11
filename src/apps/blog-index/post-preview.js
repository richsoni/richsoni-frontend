"use strict"
const React           = require("react")
const moment          = require("moment")
const responsiveComponentComposer = require("../../shared/responsiveComponentComposer")

class Small extends React.Component {
  render(){
    const url  = `./posts/${this.props.filePrefix}.html`
    const date = new moment(this.props.attributes.date).format('MM/DD/YYYY')
    const link = `/blog/posts/${this.props.filePrefix}.html`
    return <div
      style={{
        borderBottom: '1px solid #bebebe',
        paddingBottom: '1em',
        maxWidth: 650,
        margin: 'auto auto',
      }}
    >
      <h1 style={{
        marginBottom: '.4em'
      }}><a href={link}> {this.props.attributes.title}</a></h1>
      <div style={{
        fontStyle: 'italic',
        marginBottom: '1em'
      }}>Posted {date}</div>
      <div
        style={{
          display: 'block',
          color: '#000',
          textDecoration: 'none',
          backgroundImage: `url(${this.props.attributes.hero})`,
          height: 280,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundColor: '#bebebe',
        }} />
      <blockquote style={{
        fontStyle: 'italic',
        margin: 0,
        padding: '1em 0',
      }}>{this.props.attributes.blurb}</blockquote>
      <div style={{
        fontSize: '.8em',
        color: '#444',
      }} dangerouslySetInnerHTML={{__html: this.getPreview()}} />
      <a style={{
      }} href={link}>Read More...</a>
    </div>
  }

  getPreview(){
    let tree       = document.createElement("div")
    let result     = ""
    let counter    = 0
    tree.innerHTML = this.props.body.replace(/href=["'][^'"]*/, 'href=""')
    while(result.length < 200){
      const el = tree.children[counter]
      if(el){
        result = result + el.outerHTML
      } else {
        break
      }
      counter++
    }
    return result
  }
}

const Big = Small

module.exports = responsiveComponentComposer({
  big: Big,
  small: Small,
})
