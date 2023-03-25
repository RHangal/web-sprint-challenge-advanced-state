import React from "react";
import { connect } from "react-redux";
import { moveClockwise } from "../state/action-creators";

//Old wheel code
{
  /* 
  <div className="cog active" style={{ "--i": 0 }}>
          B
        </div>
  <div className="cog" style={{ "--i": 1 }}></div>
<div className="cog" style={{ "--i": 2 }}></div>
<div className="cog" style={{ "--i": 3 }}></div>
<div className="cog" style={{ "--i": 4 }}></div>
<div className="cog" style={{ "--i": 5 }}></div> */
}
{
  /* --i is a custom CSS property, no need to touch that nor the style object */
}

function Wheel(props) {
  const handleClick = (e) => {
    e.preventDefault();
    moveClockwise(wheel);
  };
  const { wheel, moveClockwise } = props;
  return (
    <div id="wrapper">
      <div id="wheel">
        {/** New Wheel Code */}
        {[0, 1, 2, 3, 4, 5].map((idx) => {
          return (
            <div
              key={idx}
              className={`cog${idx === wheel ? " active" : ""}`}
              style={{ "--i": idx }}
            >
              {idx === wheel ? "B" : null}
            </div>
          );
        })}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn">Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClick}>
          Clockwise
        </button>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { wheel: state.wheel };
};

export default connect(mapStateToProps, { moveClockwise })(Wheel);
