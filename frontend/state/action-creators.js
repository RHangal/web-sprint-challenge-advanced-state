// ❗ You don't need to add extra action creators to achieve MVP
import {
  MOVE_CLOCKWISE,
  MOVE_COUNTERCLOCKWISE,
  SET_QUIZ_INTO_STATE,
  RESET_QUIZ_STATE,
  SET_SELECTED_ANSWER,
  SET_INFO_MESSAGE,
  RESET_SELECTED_ANSWER,
} from "./action-types";
import axios from "axios";

const URL = "http://localhost:9000/api/quiz/next";
const answerURL = "http://localhost:9000/api/quiz/answer";
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

export function selectAnswer(quizID) {
  return { type: SET_SELECTED_ANSWER, payload: quizID };
}

export function resetAnswerState() {
  return { type: RESET_SELECTED_ANSWER };
}

export function setMessage(message) {
  return { type: SET_INFO_MESSAGE, payload: message };
}

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
export function postAnswer(quiz_ID, answer_ID) {
  return function (dispatch) {
    axios
      .post(answerURL, { quiz_id: quiz_ID, answer_id: answer_ID })
      .then((res) => {
        console.log(res);
        dispatch(resetAnswerState());
        dispatch(setMessage(res.data.message));
        dispatch(fetchQuiz());
      })
      .catch((err) => {
        console.error(err);
      });
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
