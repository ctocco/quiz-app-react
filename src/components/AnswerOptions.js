import React from "react";

const AnswerOptions = ({ answerOptions, onAnswerSelected }) => {
  console.log(answerOptions);
  const Answers = answerOptions.map(answerOption => {
    return (
      <ul className="list-group m-1" key={answerOption.content}>
        <li
          className="list-group-item text-center text-secondary"
          id={answerOption.content}
          disabled={answerOption.content}
          checked={answerOption.content}
          onClick={e => onAnswerSelected(e)}
          value={answerOption.value}
        >
          {answerOption.content}
        </li>
      </ul>
    );
  });
  return <div>{Answers}</div>;
};

export default AnswerOptions;
