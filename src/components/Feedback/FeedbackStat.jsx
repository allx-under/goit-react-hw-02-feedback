import React, { Component } from 'react';

class FeedbackStat extends Component {
  render() {
    const { good, neutral, bad, total, positivePercent } = this.props;
    return total === 0 ? (
      <p>There is no feedback yet</p>
    ) : (
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
