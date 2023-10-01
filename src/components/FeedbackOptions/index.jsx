import { useContext } from 'react';
import { FeedbackContext } from 'context/FeedbackContext';

export const FeedbackOptions = () => {
  const { setGood, setNeutral, setBad, options } = useContext(FeedbackContext);

  const chooseFeedback = value => {
    if (value === 'good') {
      setGood(s => s + 1);
    }
    if (value === 'neutral') {
      return setNeutral(s => s + 1);
    }
    if (value === 'bad') {
      return setBad(s => s + 1);
    }
  };

  return (
    <div>
      {options.map(option => (
        <button key={option} onClick={() => chooseFeedback(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};
