import React, { Component } from 'react'

class ClassP extends Component {
  render() {
    return (
      <div>
          <h1>Hello {this.props.name} this is Class props you are welcome to {this.props.location}</h1>
        
      </div>
    )
  }
}

export default ClassP
