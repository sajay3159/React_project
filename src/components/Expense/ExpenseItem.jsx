// Write your code at relevant places in the code below
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from '../UI/Card'
import { useState } from "react";

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);

    function buttonClickHandler() {
        setTitle("New Title");
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}> </ExpenseDate>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={buttonClickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;
