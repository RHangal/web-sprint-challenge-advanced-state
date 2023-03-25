// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from "redux";
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  RESET_QUIZ_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  RESET_SELECTED_ANSWER,
} from "./action-types";

const initialWheelState = 0;
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return (state = action.payload);

    case MOVE_COUNTERCLOCKWISE:
      return (state = action.payload);

    default:
      return state;
  }
}

const initialQuizState = null;
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case RESET_QUIZ_STATE:
      return (state = initialQuizState);

    case SET_QUIZ_INTO_STATE:
      return (state = action.payload);

    default:
      return state;
  }
}

const initialSelectedAnswerState = null;
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return (state = action.payload);
    case RESET_SELECTED_ANSWER:
      return (state = initialSelectedAnswerState);
    default:
      return state;
  }
}

const initialMessageState = "";
function infoMessage(state = initialMessageState, action) {
  switch (action.type) {
    case SET_INFO_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}

const initialFormState = {
  newQuestion: "",
  newTrueAnswer: "",
  newFalseAnswer: "",
};
function form(state = initialFormState, action) {
  return state;
}

export default combineReducers({
  wheel,
  quiz,
  selectedAnswer,
  infoMessage,
  form,
});
