// ❗ You don't need to add extra action creators to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  RESET_QUIZ_STATE,
} from "./action-types";
import axios from "axios";

const URL = "http://localhost:9000/api/quiz/next";
export function moveClockwise(state) {
  if (state === 5) {
    state = 0;
  } else {
    state = state + 1;
  }
  return { type: MOVE_CLOCKWISE, payload: state };
}

export function moveCounterClockwise(state) {
  if (state === 0) {
    state = 5;
  } else {
    state = state - 1;
  }
  return { type: MOVE_COUNTERCLOCKWISE, payload: state };
}

export function selectAnswer() {}

export function setMessage() {}

export function setQuiz(quiz) {
  return { type: SET_QUIZ_INTO_STATE, payload: quiz };
}
export function resetQuizState() {
  return { type: RESET_QUIZ_STATE };
}

export function inputChange() {}

export function resetForm() {}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    dispatch(resetQuizState());
    axios
      .get(URL)
      .then((res) => {
        dispatch(setQuiz(res.data));
      })
      .catch((err) => {
        console.error(err);
      });

    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
  };
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  };
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  };
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
