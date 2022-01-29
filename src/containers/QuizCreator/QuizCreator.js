import React, {Component} from 'react'
import classes from './QuizCreator.css'
import Button from '../../components/UI/Button/Button'

export default class QuizCreator extends Component {

  submitHandler = event => {
    event.preventDefault()
  }

  addQuestionHandler = () => {

  }

  createQuizHandler = () => {

  }

  render() {
    return (
      <div className={classes.QuizCreator}>
        <div>
        <h1>Quiz Creator</h1>
        <form onSubmit={this.submitHandler}>
          <input/>
          <hr/>
          <input/>
          <input/>
          <input/>
          <input/>
          <select></select>

          <Button
            type="primary"
            onClick={this.addQuestionHandler}
          >Добавить вопрос</Button>

          <Button
            type="success"
            onClick={this.createQuizHandler}
          >Создать тест</Button>
        </form>

        </div>
      </div>
    )
  }
}