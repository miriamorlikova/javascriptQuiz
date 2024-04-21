function Progress({ numQuestions, index, points, maxPoints, answer }) {
  const currQuestion = index + 1;

  return (
    <header className="progress">
      <progress
        value={index + Number(answer !== null)}
        max={numQuestions}
      ></progress>
      <p>
        Question <strong>{currQuestion}</strong>/{numQuestions}
      </p>
      <p>
        {points}/{maxPoints} points
      </p>
    </header>
  );
}

export default Progress;
