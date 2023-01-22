import PropTypes from 'prop-types';
import styles from './statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p className={styles.statisticsData}>Good: {good}</p>
      <p className={styles.statisticsData}>Neutral: {neutral}</p>
      <p className={styles.statisticsData}>Bad: {bad}</p>
      <p className={styles.statisticsData}>Total: {total}</p>
      <p className={styles.statisticsData}>
        Positive feedback: {positivePercentage}%
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
