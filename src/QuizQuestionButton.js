import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.button_text)
    //this will call the handler click method in the quiz question 
    //component when a button is pressed and pass that button_text value to that method
  }
  render() {
    return (
      <li>
        <button onClick={this.handleClick.bind(this)}>{this.props.button_text}</button>
      </li>
    )
  }
}

export default QuizQuestionButton