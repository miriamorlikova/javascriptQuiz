function FinishedScreen({
  points,
  maxPoints,
  highscore,
  dispatch,
  selectedRating,
}) {
  const percentagePoints = (points / maxPoints) * 100;
  let emoji;

  if (percentagePoints === 100) emoji = "🏆";
  if (percentagePoints >= 80 && percentagePoints < 100) emoji = "😍";
  if (percentagePoints >= 50 && percentagePoints < 80) emoji = "🤗";
  if (percentagePoints >= 0 && percentagePoints < 50) emoji = "🙄";
  if (percentagePoints === 0) emoji = "😭";

  return (
    <>
      <div className="result-container">
        <p className="result">
          <span>{emoji}</span> You scored <strong>{points}</strong> of{" "}
          {maxPoints}. That's {Math.round(percentagePoints)}%
        </p>
      </div>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart", payload: selectedRating })}
      >
        Restart
      </button>
    </>
  );
}

export default FinishedScreen;
