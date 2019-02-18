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
      results: 0,
      displayExplanation: true,
      correct: ""
    };
  }

  componentWillMount() {
    this.setState({
      question: QuizQuestions[0].question,
      answerOptions: QuizQuestions[0].answerOptions,
      explanation: QuizQuestions[0].explanation
    });
  }

  onAnswerSelected = e => {
    this.setUserAnswer(e.currentTarget.value);
    if (this.state.questionId < QuizQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 4000);
    } else {
      console.log("quiz end");
    }
  };

  setUserAnswer = answer => {
    let results = this.state.results + answer;

    if (answer) {
      const displayExplanation = true;
      this.setState({
        results,
        displayExplanation,
        correct: "Correct!"
      });
    } else {
      this.setState({
        displayExplanation: false
      });
    }
    console.log(this.state.results);
  };

  setNextQuestion = () => {
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
