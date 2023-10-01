import propTypes from 'prop-types';
import { useContext } from 'react';
import { FeedbackContext } from 'context/FeedbackContext';

export const Statistics = () => {
  const { good, neutral, bad } = useContext(FeedbackContext);

  const countPositiveFeedback = () => {
    const total = good + neutral + bad;

    const result = ((good / total) * 100).toFixed(0);
    return Number(result);
  };

  return (
    <div>
      {(good || neutral || bad) === 0 ? (
        <h3>There is no feedback</h3>
      ) : (
        <div>
          <h3>Good: {good}</h3>
          <h3>Neutral: {neutral}</h3>
          <h3>Bad: {bad}</h3>
          <h3>Total: {good + bad + neutral}</h3>
          <h3>Positive feedback: {countPositiveFeedback()}%</h3>
        </div>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
};
