import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Statistics from './Statistics'
import Notification from './Notification'
import { Wrapper } from './StyleComponent'
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  handleClick =(data)=> {
    this.setState((prevState) => {
      
      return {
        [data]: prevState[data] + 1,
      };
    });
  }
  
  countTotalFeedback({ good, neutral, bad }) {
   return good + neutral +bad;
    
  }
  countPositiveFeedbackPercentage( good, total ) {
   return total? (good*100)/(total) :0;
  }
  render() {
    const {good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    const percent =  this.countPositiveFeedbackPercentage(good,total);
    return (
    <Wrapper
    >
        <Section title="Please leave feedback"> <FeedbackOptions options={this.state } onLeaveFeedback={this.handleClick}/> </Section>
      
        <Section title="Statistics">{total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent.toFixed(0)} /> : <Notification message="There is no feedback"/>}</Section> 
    </Wrapper>
  );
  };
  };
//export default App
