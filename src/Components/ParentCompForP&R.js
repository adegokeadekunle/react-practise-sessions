import React, { Component } from 'react'
import PureComp from "./PureComp"
import RegularCompForPureComp from './RegularCompForPureComp';


class ParentComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"decagon institute"
        };
    }
    componentDidMount() {
setInterval(()=>{
    this.setState({name:"decagon institute"})
}, 3000)
}


  render() {
    console.log("parent component rendered")
    return (
      <div>
        parent comp for pureComp and regularComp
        <PureComp name={this.state.name}/>
        <RegularCompForPureComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp
