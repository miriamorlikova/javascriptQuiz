import NumQuestions from "./NumQuestions";
import { useState } from "react";

function StartScreen({ dispatch, numQuestions }) {
  const [selectedRating, setSelectedRating] = useState(numQuestions);

  function handleSelectionOfQuestions(rating) {
    setSelectedRating(rating);
  }
  return (
    <div className="start">
      <h2>Questions to test your JavaScript mastery</h2>
      <div className="btn-container">
        <h3>How many questions?</h3>
        <NumQuestions
          className="circles"
          color="#f0db4f"
          maxRating={numQuestions}
          size={30}
          defaultRating={numQuestions}
          onSetRating={handleSelectionOfQuestions}
        />
      </div>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start", payload: selectedRating })}
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
