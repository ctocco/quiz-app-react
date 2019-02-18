import React from "react";
import PropTypes from "prop-types";

const QuestionCount = ({ counter }) => {
  return (
    <div className="col-12">
      Question<span> {counter} of </span>
      <span>10</span>
    </div>
  );
};

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired
};

export default QuestionCount;
