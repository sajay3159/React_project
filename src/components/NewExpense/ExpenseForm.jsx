import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // Managing multiple states.
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // })
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [isVisibleForm, setIsVisibleForm] = useState(false);


    const titleChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: event.target.value
        //     }
        // })
        setEnteredTitle(event.target.value);

    };

    const amountChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredAmount: event.target.value
        //     }
        // })
        setEnteredAmount(event.target.value);

    };

    const dateChangeHandler = (event) => {
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredDate: event.target.value
        //     }
        // })
        setEnteredDate(event.target.value);

    };

    const handleCancel = () => {
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsVisibleForm(false);
    }

    function formSubmitHandler(event) {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
        setIsVisibleForm(false);

    }

    const handleAddExpenseClick = () => {
        setIsVisibleForm(true);

    }

    return (
        <div>
            {!isVisibleForm && (
                <button type="button" onClick={handleAddExpenseClick}>
                    Add Expense
                </button>
            )}

            {isVisibleForm && (
                <form onSubmit={formSubmitHandler}>
                    <div className="new-expense__controls">
                        <div className="new-expense__control">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                value={enteredTitle}
                                id="title"
                                onChange={titleChangeHandler}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="amount">Amount</label>
                            <input
                                type="number"
                                value={enteredAmount}
                                id="amount"
                                onChange={amountChangeHandler}
                            />
                        </div>
                        <div className="new-expense__control">
                            <label htmlFor="date">Date</label>
                            <input
                                type="date"
                                id="date"
                                value={enteredDate}
                                min="2023-01-01"
                                max="2024-12-31"
                                onChange={dateChangeHandler}
                            />
                        </div>
                    </div>
                    <div className="new-expense__actions">
                        <button type="submit">Add Expense</button>
                        <button type="button" onClick={handleCancel}>
                            Cancel
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default ExpenseForm;