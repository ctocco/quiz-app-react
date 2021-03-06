import React, { Component } from "react";
// import QuizQuestions from "./api/QuizQuestions";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Home extends Component {
  State = {
    name: ""
  };

  onInputChange = e => {
    this.setState({ name: e.target.value });
  };

  onSubmitLocalStorage = e => {
    e.preventDefault();
    let name = this.state.name;
    localStorage.setItem("name", name);
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="">Javascript | React</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h4>The ESSENTIAL Quiz</h4>
          <div className="container">
            <hr />

            <h1>Enter Your Name Below</h1>
            <div className="container">
              <br />
              <form
                className="input-group mb-3"
                onSubmit={this.onSubmitLocalStorage}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={this.onInputChange.bind(this)}
                />
                <div className="input-group-append">
                  <Link to="/student">
                    <button
                      className="btn btn-outline-secondary mb-2"
                      type="submit"
                      id="button-addon2"
                    >
                      Enter
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;
