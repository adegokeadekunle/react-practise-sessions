import React, { Component } from 'react'
import bellA from './bellA.png'
    import bellB from './bellB.png'

class ClassState extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message : "kindly subscribe",
            stack : "click to get assigned to a stack",
            imageURl : bellA
            
        };
    }
    style = {
        fontStyle: 'italic',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'blue'
    }
    ButtonChange =()=>{
        this.setState({
            message : "you have been assigned",
             stack : "java"
        });
    }
    ImgChange=()=>{
        this.setState({
    imageURl : bellB,
    message: "thanks for subscribing "
    })
 }


  render() {
    return (
      <div>
          <h1 styles={this.styles}>{this.state.message}</h1>
          <button onClick={this.ButtonChange}>{this.state.stack}</button>
          <p>
              <img styles={{width: "20px",height: "20px"}} src={this.state.imageURl} onClick={this.ImgChange} alt=""/>
          </p>
        
      </div> 
    )
  }
}

export default ClassState