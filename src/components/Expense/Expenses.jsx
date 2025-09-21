// Write your code at relevant places in the code below:

import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023");

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };
    const expensesItem = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    console.log(expensesItem)
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={changeFilterHandler}
            />
            {expensesItem.map((expense) => {
                return (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        date={expense.date}
                        price={expense.price}
                    />
                );
            })}
        </Card>
    );
};

export default Expenses;
