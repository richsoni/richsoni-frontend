"use strict"
const React = require("react")
const style = require("./style.css")

const httpGet = function(url, callback){
  let request = new XMLHttpRequest();
  request.open("GET", "/blog/posts.json", true)
  request.onreadystatechange = function () {
    if (request.readyState != 4 || request.status != 200) return; 
    let payload = request.responseText
    callback(payload)
  };
  request.send();
}

const processPosts = function(collection){
  return {
    posts: Object
      .keys(collection)
      .sort()
      .reverse()
      .map((item) => [item, collection[item]])
      .filter((item) => !item[1].attributes.depricated)
  }
}
class Post extends React.Component {
  render(){
    console.log(this.props)
    return <div>
      <img src={this.props.attributes.hero} />
    </div>
  }
}

class RootComponent extends React.Component{
  constructor(){
    this.state = {
      posts: [],
    }

    httpGet('/blog/posts.json', (payload) => {
      this.setState(processPosts(JSON.parse(payload)))
    })
  }

  render() {
    if (this.state.posts.length === 0){
      return <div>
        loading
      </div>
    }
    return <div>
      <b>firstPost</b>
      { this.state.posts.map((post) => <Post key={post[0]} {...post[1]} /> )}
    </div>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
