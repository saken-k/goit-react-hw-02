import css from './Options.module.css';

const Option = ({ updateFeedback, resetFeedback, feedbackType }) => {
  return (
    <div className={css.option}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      {Object.values(feedbackType).some(value => value > 0) && (
        <button onClick={() => resetFeedback()}>Reset</button>
      )}
    </div>
  );
};

export default Option;
