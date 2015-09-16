require("./style/style.css")

pages = {
  homepage:     require("./apps/homepage/entry"),
  blog:         require("./apps/blog-index/entry"),
  'song-index': require("./apps/song-index/entry"),
  songs:        require("./apps/song/entry"),
}

window.App = {
  pages: pages,
  boot: function(page){
    if (pages[page]){
      pages[page]()
    } else {
      console.error(page, ' is not an app')
    }
  }
}
