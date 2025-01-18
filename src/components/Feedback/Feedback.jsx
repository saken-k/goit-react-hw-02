import css from './Feedback.module.css';

const Feedback = ({ totalFeedback, feedbackType, positivePercentage }) => {
  return (
    <div className={css.feedback}>
      {totalFeedback > 0 && (
        <ul>
          <li>Good: {feedbackType.good} </li>
          <li>Neutral: {feedbackType.neutral} </li>
          <li>Bad: {feedbackType.bad} </li>
          <li>Total: {totalFeedback} </li>
          <li>Positive: {positivePercentage} </li>
        </ul>
      )}
    </div>
  );
};

export default Feedback;
