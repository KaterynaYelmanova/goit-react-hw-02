


const Options = ({
  totalFeedback,
  handleReset,
  updateFeedback,
  resp: { good, neutral, bad, reset },
}) => {
  return (
    <div>
      <button onClick={() => updateFeedback("good")} type="button">
        {good}
      </button>
      <button onClick={() => updateFeedback("neutral")} type="button">
        {neutral}
      </button>
      <button onClick={() => updateFeedback("bad")} type="button">
        {bad}
      </button>
      {totalFeedback > 0 && (
        <button onClick={handleReset} type="button">
          {reset}
        </button>
      )}
    </div>
  );
};

export default Options;