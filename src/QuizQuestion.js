
import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

class QuizQuestion extends Component {

  render() {
    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          <ul>
            <li><QuizQuestionButton /></li>
          </ul>
        </section>
      </main>      
    )
  }
}

export default QuizQuestion