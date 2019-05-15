import React, { Component } from "react";
import Home from "./components/Home";
import Error from "./components/Error";

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
      results: 0,
      displayExplanation: true,
      correct: "",
      toResults: false
    };
  }
  // using will mount as I want the questions to load before rendering
  componentWillMount() {
    this.setState({
      question: QuizQuestions[0].question,
      answerOptions: QuizQuestions[0].answerOptions,
      explanation: QuizQuestions[0].explanation
    });
  }

  // passing value from AnswerOptions.js if this is true a 1 is passed up
  onAnswerSelected = e => {
    // code will run until id is less than array of questions
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.questionId < QuizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 3000);
    } else {
      setTimeout(() => alert("you scored" + this.state.results), 3000);

      setTimeout(() => window.location.reload(), 6000);
    }
  };

  setUserAnswer = answer => {
    //if answer is true or 1 then execute correct otherwise false
    if (answer) {
      const displayExplanation = true;
      this.setState({
        ...this.state.results,
        results: this.state.results + 1,
        displayExplanation,
        correct: "Correct!"
      });
    } else {
      this.setState({
        displayExplanation: false
      });
    }
  };

  setNextQuestion = () => {
    // This will keep on moving through the array when each question is answered

    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;
    this.setState({
      counter: counter,
      questionId: questionId,
      question: QuizQuestions[counter].question,
      answerOptions: QuizQuestions[counter].answerOptions,
      explanation: QuizQuestions[counter].explanation,
      displayExplanation: true,
      correct: ""
    });
  };

  render() {
    console.log(this.state.results);
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
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
