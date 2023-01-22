import PropTypes from 'prop-types';

import styles from './feedbackOptions.module.css';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map(name => (
        <button
          key={name}
          className={styles.button}
          onClick={() => onLeaveFeedback(name)}
          type="button"
        >
          {capitalizeFirstLetter(name)}
        </button>
      ))}
    </ul>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
