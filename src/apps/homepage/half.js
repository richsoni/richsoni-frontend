const React = require("react")
let style = {
  width: '100%',
  height: '50vh',
}

class Half extends React.Component{
  render(){
    return <section style={Object.assign({}, style, this.props.style)}>
    </section>
  }
}

Half.propTypes = {
  style: React.PropTypes.object,
}
Half.defaultProps = {
  style: {},
}

module.exports = Half
