require("./style/style.css")

pages = {
  homepage: require("./apps/homepage/entry")
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
