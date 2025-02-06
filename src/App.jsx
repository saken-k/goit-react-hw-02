import { useEffect, useMemo, useState } from 'react';
import './App.css';
import Description from './components/Description/Description';
import Option from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';

function App() {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedData = localStorage.getItem('feedbackType');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        if (
          typeof parsedData.good === 'number' &&
          typeof parsedData.neutral === 'number' &&
          typeof parsedData.bad === 'number'
        ) {
          return parsedData;
        }
      } catch (error) {
        console.error('Error parsing feedbackType from localStorage:', error);
      }
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const updateFeedback = option => {
    setFeedbackType(prev => ({
      ...prev,
      [option]: prev[option] + 1,
    }));
  };

  const totalFeedback = useMemo(
    () => feedbackType.good + feedbackType.neutral + feedbackType.bad,
    [feedbackType]
  );

  const positivePercentage = useMemo(
    () =>
      totalFeedback > 0
        ? Math.round((feedbackType.good / totalFeedback) * 100)
        : 0,
    [feedbackType, totalFeedback]
  );

  const resetFeedback = () => {
    setFeedbackType({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    const saveData = setTimeout(() => {
      localStorage.setItem('feedbackType', JSON.stringify(feedbackType));
    }, 300);

    return () => clearTimeout(saveData);
  }, [feedbackType]);

  return (
    <>
      <Description />
      <Option
        updateFeedback={updateFeedback}
        feedbackType={feedbackType}
        resetFeedback={resetFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          totalFeedback={totalFeedback}
          feedbackType={feedbackType}
          positivePercentage={positivePercentage}
        />
      )}
    </>
  );
}

export default App;
