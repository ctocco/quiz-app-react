import React from "react";

const Question = props => {
  const { question } = props;
  console.log(props);
  return <h2>{question}</h2>;
};

export default Question;
