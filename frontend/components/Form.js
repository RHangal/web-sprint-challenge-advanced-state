import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/action-creators";

export function Form(props) {
  console.log(props);
  const { form, inputChange } = props;

  const onChange = (evt) => {
    switch (evt.target["id"]) {
      case "newQuestion":
        return inputChange(
          evt.target.value,
          form.newTrueAnswer.trim(),
          form.newFalseAnswer
        );
      case "newTrueAnswer":
        return inputChange(
          form.newQuestion,
          evt.target.value.trim(),
          form.newFalseAnswer
        );
      case "newFalseAnswer":
        return inputChange(
          form.newQuestion,
          form.newTrueAnswer,
          evt.target.value.trim()
        );
      default:
        return;
    }
  };

  const onSubmit = (evt) => {};

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input
        maxLength={50}
        onChange={onChange}
        id="newQuestion"
        value={form.newQuestion}
        placeholder="Enter question"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newTrueAnswer"
        value={form.newTrueAnswer}
        placeholder="Enter true answer"
      />
      <input
        maxLength={50}
        onChange={onChange}
        id="newFalseAnswer"
        value={form.newFalseAnswer}
        placeholder="Enter false answer"
      />
      <button
        id="submitNewQuizBtn"
        disabled={
          form.newQuestion && form.newTrueAnswer && form.newFalseAnswer
            ? false
            : true
        }
      >
        Submit new quiz
      </button>
    </form>
  );
}

export default connect((st) => st, actionCreators)(Form);
