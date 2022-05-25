import React, { Component } from 'react'
import UpdatedComp from './HighOrderComponent'

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            count: 0
        }
    }
    IncreaseCount =()=>{
        this.setState({count: this.state.count +1})
    }
  render() {
      const {count} = this.state;
    return (
      <>
        <button onMouseOver={this.IncreaseCount}>{this.props.name}click me!</button>
        <h1>{count}</h1>
      </>
    )
  }
}

export default UpdatedComp(ClickCounter )
