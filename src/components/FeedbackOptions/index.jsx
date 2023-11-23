import { Button, ListBtn,} from './BoxButtonStyle'
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <ListBtn>
    {Object.keys(options).map(item => {
                    return (
                        <li key={item}><Button  type="button" onClick={()=>onLeaveFeedback(item)} >{item}</Button></li>
            )
        })}
    </ListBtn>
}
export default FeedbackOptions