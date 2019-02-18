import React from "react";
import Question from "./Question";
import QuestionCount from "./QuestionCount";
// import Image from "./Image";
import QuestionOptions from "./AnswerOptions";

const Student = props => {
  console.log(props);
  const { questionId } = props;
  const { question } = props;
  const { answerOptions } = props;

  const localStorageValue = localStorage.getItem("name");

  return (
    <div>
      <h5 className="mt-1 ml-5 float-left">Welcome {localStorageValue} </h5>
      <div className="Container mt-5 p-5">
        <div className="row">
          <div className="col-12">
            <QuestionCount counter={questionId} />
          </div>

          <div className="col-12">
            <Question question={question} />
          </div>
          <div className="col-4 align-self-center" />
          <div className="col-4 align-self-center">
            <QuestionOptions
              answerOptions={answerOptions}
              onAnswerSelected={props.onAnswerSelected}
            />
          </div>
          <div className="col-4 align-self-center" />
        </div>
      </div>
    </div>
  );
};

export default Student;
