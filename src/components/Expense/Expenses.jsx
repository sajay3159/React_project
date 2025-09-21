
import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023");

    const changeFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={changeFilterHandler}
            />
            <ExpensesChart filteredExpensesForChart={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    );
};

export default Expenses;
