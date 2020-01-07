import React, { Component } from 'react'
import { getRandomColor } from './randomColorGenerator.js'

class Child extends Component {

  handleClick = () => {
    this.props.handleColorChange(getRandomColor())
  }

  render() {
    return (
      <div onClick={this.handleClick}
        className="child"
        style={{backgroundColor: this.props.color}}
      ></div>
    )
  }
}

export default Child
