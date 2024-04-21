function Options({ questions, answer, dispatch }) {
  const hasBeenSelected = answer !== null;
  return (
    <div className="options">
      {questions.options.map((option, index) => (
        <button
          className={` btn btn-option ${index === answer ? "answer" : ""} ${
            hasBeenSelected
              ? index === questions.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={option}
          option={option}
          disabled={hasBeenSelected}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
