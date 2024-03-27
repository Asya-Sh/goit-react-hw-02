import React from 'react';
import PropTypes from 'prop-types';
import s from './Feedback.module.css';

const Feedback = ({ good, neutral, bad, reset }) => {
    return (
        <section>
        <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Reset: {reset}</li>
      </ul>
        </section>
    );
  };

  Feedback.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    reset: PropTypes.number.isRequired,
  };

export default Feedback
