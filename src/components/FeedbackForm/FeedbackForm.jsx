import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/Feedbackoptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

import styles from './feedbackForm.module.css';

const voteOptions = ['good', 'neutral', 'bad'];

class FeedbackForm extends Component {
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

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed();
    return Number(result);
  }

  render() {
    const total = this.countTotalFeedback();
    const goodPercent = this.countPositiveFeedbackPercentage('good');
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.totalWrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={voteOptions}
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
              positivePercentage={goodPercent}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default FeedbackForm;
