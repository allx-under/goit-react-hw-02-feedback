import React, { Component } from 'react';
import styled from 'styled-components';

import FeedbackBtns from './FeedbackBtns';
import FeedbackStat from './FeedbackStat';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickAddToStat = e => {
    const { value } = e.target;
    this.setState(prevState => {
      return { [value]: prevState[value] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (prevValue, currValue) => prevValue + currValue,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return this.countTotalFeedback() > 0
      ? ((100 / this.countTotalFeedback()) * this.state.good).toFixed()
      : 0;
  };

  render() {
    return (
      <Container>
        <h2>Please leave feedback</h2>
        <FeedbackBtns onClick={this.onClickAddToStat} />
        <h2>Statistics</h2>
        <FeedbackStat
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercent={this.countPositiveFeedbackPercentage()}
        />
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 0 15px;
`;

export default Feedback;
