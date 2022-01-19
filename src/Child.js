import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     color: getRandomColor(),
  //     childrenColor: this.color
  //   }
  // }
  render() {
    console.log("Propsss "+this.props)
    return (
      <div
        className="child"
        style={{backgroundColor: this.props.color}}
        
        onClick={ () => this.props.handleChangeColor(getRandomColor())}
      ></div>
    )
  }
}

export default Child
