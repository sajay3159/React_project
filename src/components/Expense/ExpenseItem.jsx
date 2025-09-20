// Write your code at relevant places in the code below
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from '../UI/Card'

const ExpenseItem = (props) => {
    function handleClickHandler(event) {
        console.log("Button clicked");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}> </ExpenseDate>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={handleClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
