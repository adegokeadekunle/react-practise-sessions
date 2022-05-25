import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log("pure component rendered")
    return (
        
      <div>PureComp from react {this.props.name}</div>
    )
  }
}
export default PureComp;
