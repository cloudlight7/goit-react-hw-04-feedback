import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Statistics from './Statistics'
import Notification from './Notification'
import { Wrapper } from './StyleComponent'

//import React from 'react'

 const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (data) => {
    switch (data) {
      case 'good':
        setGood((prevState) => {
          return prevState + 1
        })
      //  break

      case 'neutral':
        setNeutral((prevState) => {
          return prevState + 1
        })
       // break
      case 'bad':
        setBad((prevState) => {
          return prevState + 1
        })
       // break
    }
  }
  function  countTotalFeedback() {
   return good + neutral +bad;
    
  }
 function countPositiveFeedbackPercentage() {
   return total? (good*100)/(total) :0;
  }

  const total = countTotalFeedback();
  const percent =  countPositiveFeedbackPercentage()
  return (
        <Wrapper
    >
      <Section title="Please leave feedback"> <FeedbackOptions options={{ good, neutral, bad}} onLeaveFeedback={handleClick}/> </Section>
      
        <Section title="Statistics">{total ? <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={percent.toFixed(0)} /> : <Notification message="There is no feedback"/>}</Section> 
    </Wrapper>
  )
}
export default App