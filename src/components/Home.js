import React, { Component } from "react";
// import QuizQuestions from "./api/QuizQuestions";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

class Home extends Component {
  State = {
    name: ""
  };

  onInputChange = e => {
    console.log(e.target.value);

    this.setState({ name: e.target.value });
    console.log(this.state);
  };

  onSubmitLocalStorage = e => {
    e.preventDefault();
    let name = this.state.name;
    localStorage.setItem("name", name);
    console.log(localStorage);
  };

  render() {
    return (
      <div>
        <header className="App-header">
          <h1 className="">
            The ULTIMATE... most fully AWESOME Javascript and React Quiz
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <h4>...you'll ever need to take</h4>
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
