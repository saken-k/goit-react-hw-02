import css from './Notification.module.css';

const Notification = ({ totalFeedback }) => {
  return (
    <div className={css.notification}>
      {totalFeedback == 0 && <p>No feedback yet</p>}
    </div>
  );
};

export default Notification;
