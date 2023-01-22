// import FeedbackForm from './FeedbackForm/FeedbackForm';

// export const App = () => {
//   return (
//     <div>
//       <FeedbackForm />
//     </div>
//   );
// };

import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

import styles from './app.module.css';

// const voteOptions = ['good', 'neutral', 'bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveVote = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const result = ((good / total) * 100).toFixed();
    return Number(result);
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const variants = Object.keys(this.state);

    return (
      <div className={styles.totalWrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={variants}
            onLeaveFeedback={this.leaveVote}
          />
        </Section>
        <Section title="Statistics">
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
