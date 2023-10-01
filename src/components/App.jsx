import { FeedbackOptions } from './FeedbackOptions';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackProvider } from 'context/FeedbackContext';

export function App() {
  return (
    <FeedbackProvider>
      <Section title="Please leave feedback">
        <FeedbackOptions></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        <Statistics></Statistics>
      </Section>
    </FeedbackProvider>
  );
}
