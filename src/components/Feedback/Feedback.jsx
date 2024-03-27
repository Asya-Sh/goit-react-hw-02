import React from 'react';
import PropTypes from 'prop-types';

const Feedback = ({click, totalFeedback, positiveFeedback, }) => {
    const { good, neutral, bad } = click;

    return (
        <section>
                <ul>
                    <li>Good: {good}</li>
                    <li>Neutral: {neutral}</li>
                    <li>Bad: {bad}</li>
                    <li>Total: {totalFeedback}</li>
                    <li>Positive: {positiveFeedback}%</li>
                </ul>
        </section>
    );
};

Feedback.propTypes = {
    click: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    }).isRequired,
    totalFeedback: PropTypes.number.isRequired,
};
export default Feedback;
