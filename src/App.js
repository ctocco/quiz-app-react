import React, { Component } from "react";
import Home from "./components/Home";
import Error from "./components/Error";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
import QuizQuestions from "./api/QuizQuestions";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      questionId: 1,
      question: "",
      answerOptions: [],
      explanation: "",
      results: []
    };
  }

  componentWillMount() {
    this.setState({
      question: QuizQuestions[0].question,
      answerOptions: QuizQuestions[0].answerOptions
    });
    console.log(this.state);
  }

  onAnswerSelected = e => {
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.questionId < QuizQuestions.length) {
      console.log("Next question");
    } else {
      console.log(this.state.results);
    }
  };

  setUserAnswer = answer => {
    if (answer) {
      console.log("correct");
    } else {
      console.log("incorrect");
    }
  };

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route
                path="/teacher"
                render={props => <Teacher {...this.state} />}
              />
              <Route
                path="/student"
                render={props => (
                  <Student
                    {...this.state}
                    isAuthed={true}
                    onAnswerSelected={this.onAnswerSelected}
                  />
                )}
              />
              <Route component={Error} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
