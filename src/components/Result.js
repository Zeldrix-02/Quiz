import React from "react";

function Result({ score, total }) {
  const percent = ((score / total) * 100).toFixed(2);
  return (
    <div className="result">
      <h2>Quiz Complete!</h2>
      <p>Correct Answers: {score} out of {total}</p>
      <p>Score: {percent}%</p>
    </div>
  );
}

export default Result;
