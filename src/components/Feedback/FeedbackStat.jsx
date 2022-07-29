import React, { Component } from 'react';

class FeedbackStat extends Component {
  render() {
    const { good, neutral, bad, total, positivePercent } = this.props;
    return (
      <ul>
        <li>
          <p>Good: {good}</p>
        </li>
        <li>
          <p>Neutral: {neutral}</p>
        </li>
        <li>
          <p>Bad: {bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive feedback: {positivePercent}%</p>
        </li>
      </ul>
    );
  }
}

export default FeedbackStat;
