import React, { useState } from 'react';
import QuizData from './components/Quizdata';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState('');
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === QuizData[current].answer) {
      setScore(score + 1);
    }

    setSelected('');
    if (current + 1 < QuizData.length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Multiple-Choice Quiz</h2>

        {showResult ? (
          <div className="text-center">
            <h4>Final Score: {score} / {QuizData.length}</h4>
            <h5>Percentage: {(score / QuizData.length * 100).toFixed(2)}%</h5>
          </div>
        ) : (
          <>
            <h5>{QuizData[current].question}</h5>
            <div className="mt-3">
              {QuizData[current].options.map((option, index) => (
                <button
                  key={index}
                  className={`btn btn-outline-primary w-100 text-start mb-2 ${
                    selected === option ? 'active' : ''
                  }`}
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <div className="text-end mt-3">
              <button className="btn btn-success" disabled={!selected} onClick={handleNext}>
                {current === QuizData.length - 1 ? 'Finish' : 'Next'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
