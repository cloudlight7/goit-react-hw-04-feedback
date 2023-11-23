import {StatText} from './StatisticStyle'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
   
    return (
        <div>
            <StatText>Good: {good}</StatText>
            <StatText>Neutral: {neutral}</StatText>
            <StatText>Bed: {bad}</StatText>
            <StatText>Total: {total}</StatText>
            <StatText>Positive feedback: {positivePercentage}%</StatText>
      </div>
    );
};

export default Statistics