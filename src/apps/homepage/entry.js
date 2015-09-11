React = require("react")

class RootComponent extends React.Component{
  render() {
    return <header>
      <nav>
        <li>Yo</li>
      </nav>
    </header>
  }
}

module.exports = function(){
  React.render(<RootComponent />, document.body)
}
