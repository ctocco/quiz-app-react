import React from "react";

const Answer = props => {
  return (
    <div className="container">
      <div>
        {" "}
        {props.correct ? (
          <h4 className="alert alert-success mr-5 ml-5">{props.correct}</h4>
        ) : (
          ""
        )}
      </div>
      <div>
        {props.displayExplanation ? (
          ""
        ) : (
          <div className="alert alert-danger mr-5 ml-5">
            <h4>Incorrect</h4>
            <p>{props.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Answer;
