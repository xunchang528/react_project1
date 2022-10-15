import React, { Component} from 'react'
import { ThemeContext } from './App'

export default class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      count: props.initialCount
    }
  }
  render() {
    console.log("CLASS component")
    return (
      <ThemeContext.Consumer>
        {
          style => (
            <>
              <button style={style} onClick={()=>{ this.changeCount(-1) }}>-</button>
              <span>{this.state.count}</span>
              <button style={style} onClick={()=>{ this.changeCount(+1) }}>+</button>
            </>
          )
        }
      </ThemeContext.Consumer>
    )
  }

  changeCount(amount) {
    // //
    // this.setState({count: this.state.count + amount})
    this.setState((prevState) =>{
      return {count:prevState.count + amount}
    })
  }
}