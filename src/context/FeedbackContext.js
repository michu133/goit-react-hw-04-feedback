import { createContext } from 'react';
import { useState } from 'react';
const FeedbackContext = createContext();

const FeedbackProvider = ({ children }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const options = ['good', 'neutral', 'bad'];

  return (
    <FeedbackContext.Provider
      value={{ good, setGood, neutral, setNeutral, bad, setBad, options }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackContext, FeedbackProvider };
