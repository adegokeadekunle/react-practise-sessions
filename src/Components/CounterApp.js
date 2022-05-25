import React, { Component } from 'react'
import UpdatedComp from './HighOrderComponent'

export class CounterApp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
        count: 0,
        count2: 0
    }
    
  }
  Increment = ()=>{
    this.setState({count: this.state.count +1})
    
    }
    Decrement =() =>{
      this.setState({count: this.state.count <= 1 ? 0 : this.state.count -1})
     
    }
    HoverIncrement =()=>{
      this.setState({count2: this.state.count2 +1})
    }
    HoverDecrement =()=>{
      this.setState({count2: this.state.count2 <= 1 ? 0 : this.state.count2 -1})

    }

  

  render() {
    const {count} = this.state;
    const {count2} = this.state;
    return (
      <div>
        <button onClick={this.Increment}>click to increment</button>
        <h1>{this.props.name} counted is : {count} times</h1>
        <button onClick={this.Decrement}>click to decrement</button>
        <h1>************* mouse enter ************* </h1>
        <div>
        <button onMouseEnter={this.HoverIncrement}>click to increment</button>
        <h1>{this.props.name} Entered mouse : {count2} times</h1>
        <button onMouseEnter={this.HoverDecrement}>click to decrement</button> 
      </div>
      </div>
     
    )
  }
}

export default UpdatedComp(CounterApp);