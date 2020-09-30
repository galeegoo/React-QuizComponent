import React, { Component } from 'react'


class QuizQuestionButton extends Component {

    constructor(props){
        super(props);
        this.state = {quiz_position: 1 }
    }
    render() {
        return (
            <li>
            <button type="button">Click Me!</button>
            </li>
        )
    }

}

export default QuizQuestionButton