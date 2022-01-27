import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Quiz from './containers/Quiz/Quiz'
import Auth from './containers/Auth/Auth'
import QuizCreator from './containers/QuizCreater/QuizCreator'
import QuizList from './containers/QuizList/QuizList'


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth}/>
          <Route path="/quiz-creator" component={QuizCreator}/>
          <Route path="/quiz/:id" component={QuizList}/>
          <Route path="/" component={Quiz}/>
        </Switch>
      </Layout>
    )
  }
}

export default App
