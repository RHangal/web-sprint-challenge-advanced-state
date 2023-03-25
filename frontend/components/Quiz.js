import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchQuiz, selectAnswer, postAnswer } from "../state/action-creators";
function Quiz(props) {
  const { quiz, fetchQuiz, selectedAnswer, selectAnswer, postAnswer } = props;

  useEffect(() => {
    fetchQuiz();
  }, []);

  const handleAnswerOneClick = (e) => {
    e.preventDefault();
    selectAnswer(quiz.answers[0]["answer_id"]);
  };

  const handleAnswerTwoClick = (e) => {
    e.preventDefault();
    selectAnswer(quiz.answers[1]["answer_id"]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postAnswer(quiz.quiz_id, selectedAnswer);
  };

  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        quiz ? (
          <>
            <h2>{quiz.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {quiz.answers[0]["text"]}
                <button onClick={handleAnswerOneClick}>
                  {selectedAnswer === quiz.answers[0]["answer_id"]
                    ? "SELECTED"
                    : "select"}
                </button>
              </div>

              <div className="answer">
                {quiz.answers[1]["text"]}
                <button onClick={handleAnswerTwoClick}>
                  {selectedAnswer === quiz.answers[1]["answer_id"]
                    ? "SELECTED"
                    : "select"}
                </button>
              </div>
            </div>

            <button
              id="submitAnswerBtn"
              disabled={selectedAnswer ? false : true}
              onClick={handleSubmit}
            >
              Submit answer
            </button>
          </>
        ) : (
          "Loading next quiz..."
        )
      }
    </div>
  );
}

const mapActionsToProps = () => {
  return {
    fetchQuiz: fetchQuiz,
    selectAnswer: selectAnswer,
    postAnswer: postAnswer,
  };
};

const mapStateToProps = (state) => {
  return {
    quiz: state.quiz,
    selectedAnswer: state.selectedAnswer,
  };
};

export default connect(mapStateToProps, mapActionsToProps())(Quiz);
