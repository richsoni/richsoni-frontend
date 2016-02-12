require("./style/style.css")
const React = window.React = require("react")

const pages = {
  homepage:     require("./apps/homepage/entry"),
  blog:         require("./apps/blog-index/entry"),
  'song-index': require("./apps/song-index/entry"),
  songs:        require("./apps/song/entry"),
  'blog/posts': require("./apps/blog-post/entry"),
}

window.App = {
  pages: pages,
  boot: function(page, attrs){
    let Component = pages[page]
    if (Component){
      React.render(<Component {...attrs} />, document.body)
    } else {
      console.error(page, ' is not an app')
    }
  }
}
