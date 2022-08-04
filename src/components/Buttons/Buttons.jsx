import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

class Buttons extends Component {
  render() {
    const { onClick } = this.props;
    return (
      <Wrapper>
        <FeedbackBtnsItem>
          <button onClick={onClick} value="good">
            Good
          </button>
        </FeedbackBtnsItem>
        <FeedbackBtnsItem>
          <button onClick={onClick} value="neutral">
            Neutral
          </button>
        </FeedbackBtnsItem>
        <FeedbackBtnsItem>
          <button onClick={onClick} value="bad">
            Bad
          </button>
        </FeedbackBtnsItem>
      </Wrapper>
    );
  }
}

export default Buttons;

export const Wrapper = styled.ul`
  display: flex;
`;

const FeedbackBtnsItem = styled.li`
  margin-right: 10px;
`;

Buttons.propTypes = {
  onClick: PropTypes.func,
};
