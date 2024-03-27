import { useState, useEffect} from 'react';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';
import './index.css';
import 'modern-normalize';

function App() {
    const [click, setClick] = useState(() => {
        const savedReviews = JSON.parse(localStorage.getItem('click')); 

        if (savedReviews) {
            return savedReviews;
        } else {
            return {
                good: 0,
                neutral: 0,
                bad: 0,
            };
        }
    });

    useEffect(() => {
        localStorage.setItem('click', JSON.stringify(click));
      }, [click]);
  
    const totalFeedback = click.good + click.neutral + click.bad;

    const positiveFeedback = totalFeedback > 0
    ? Math.round(
        ((click.good + click.neutral) / totalFeedback) * 100) : 0;

      const updateFeedback = feedbackType => {
        setClick(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1,
        }));
    };

    const reset = () => {
        setClick({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    };

    return (
        <div className="wrapper_cafe">
            <Description />
            <Options updateFeedback={updateFeedback} 
            totalFeedback={totalFeedback} 
            reset={reset} />
            {totalFeedback > 0 && (<Feedback click={click} 
            totalFeedback={totalFeedback} 
            positiveFeedback={positiveFeedback} 
            />)}
            {!totalFeedback && <Notification />}
        </div>
    );
}

export default App;
