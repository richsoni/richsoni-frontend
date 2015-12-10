const React = require("react")
let style = {
  width: '100%',
  minHeight: '50vh',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}

class Half extends React.Component{
  render(){
    return <section style={Object.assign({}, style, this.props.style)}>
      {this.props.children}
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