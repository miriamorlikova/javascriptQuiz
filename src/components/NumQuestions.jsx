import { useState } from "react";
import PropTypes from "prop-types";

const isMediumScreen = window.innerWidth < 800 && window.innerWidth >= 600;
const isSmallScreen = window.innerWidth < 600;

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const circlesContainerStyle = {
  display: "flex",
};

NumQuestions.propTypes = {
  maxRating: PropTypes.number,
  defaultRating: PropTypes.number,
  color: PropTypes.string,
  size: PropTypes.number,
  messages: PropTypes.array,
  className: PropTypes.string,
  onSetRating: PropTypes.func,
};

export default function NumQuestions({
  maxRating = 5,
  color = "#fcc419",
  size = 48,
  className,
  messages = [],
  defaultRating = 0,
  onSetRating,
}) {
  const [rating, setRating] = useState(defaultRating);
  const [temporaryRating, setTemporaryRating] = useState(0);

  const textStyle = {
    lineHeight: "1",
    margin: "0",
    color,
    fontSize: `${size / 1.5}px`,
  };

  function handleRating(rating) {
    setRating(rating);
    onSetRating(rating);
  }

  return (
    <div style={containerStyle} className={className}>
      <div style={circlesContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <Circle
            number={i + 1}
            filled={
              temporaryRating ? temporaryRating >= i + 1 : rating >= i + 1
            }
            key={i}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTemporaryRating(i + 1)}
            onHoverOut={() => setTemporaryRating(0)}
            color={color}
            size={size}
          />
        ))}
      </div>
      {messages.length === maxRating && (
        <p style={textStyle}>
          {messages[temporaryRating ? temporaryRating - 1 : rating - 1]}
        </p>
      )}
    </div>
  );
}

function Circle({
  onRate,
  number,
  filled,
  onHoverIn,
  onHoverOut,
  color,
  size,
}) {
  const circleStyle = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "25%",
    cursor: "pointer",
    backgroundColor: filled ? color : "transparent",
    border: `2px solid ${color}`,
    marginRight: "8px",
    position: "relative",
  };

  const svgStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fill: filled ? color : "none",
  };

  const textStyle = {
    fontSize: `${size / 2}px`,
    fill: filled ? "#191e22" : color,
    dominantBaseline: "middle",
    textAnchor: "middle",
  };

  return (
    <span
      role="button"
      style={circleStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        style={svgStyle}
      >
        <circle cx="10" cy="10" r="8" />
        <text x="50%" y="50%" style={textStyle}>
          {number}
        </text>
      </svg>
    </span>
  );
}
