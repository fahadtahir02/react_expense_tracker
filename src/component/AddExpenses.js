import React from "react";
import { useState } from "react";
import "./AddExpenses.css";



export default function AddExpense() {
    let counter = 0 
    
    const [expenses, setExpenses] = useState([]);
    const [expenseTitle, setExpenseTitle] = useState("");
    const [cost, setCost] = useState(0);
    const [date, setDate] = useState("");

    const addExpenseHandler = (e, expenseTitle, cost, date) => {
        e.preventDefault()

        const newExpense = {
            expense : expenseTitle,
            amount : cost,
            time : date

        };

        setExpenses(prevExpenses => [...prevExpenses, newExpense])
        
        setExpenseTitle("");
        setCost(0);
        setDate("");

        console.log(expenses);
        
    };

    



    return (
        <div className = "add-expense-container">
            <h1 className="add-expense-header">Add Expense</h1>
            <form className="add-expense-form">
                <input 
                    type = "text" 
                    placeholder="Expense Name"  
                    value = {expenseTitle} 
                    onChange = {(e)=>{setExpenseTitle(e.target.value)}}
                />
                <input 
                    type = "number" 
                    placeholder="Enter Cost"
                    value = {cost}
                    onChange = {(e) => {setCost(e.target.value)}}
                />
                <input 
                    type = "date"
                    value = {date}
                    onChange = {(e) => {setDate(e.target.value)}}
                />
                <button onClick = {(e) => {addExpenseHandler(e, expenseTitle, cost, date)}}>Add Expense</button>
                {/* <button onClick={(e) => { addExpenseHandler(e, { expenseTitle }, { cost }, { date }) }}>Add Expense</button>
                    key point I need to fully understand when to pass parameters as {expenseTitle} and without so like expenseTitle.
                
                */
                
                }
            </form>

            <div className="list-expense-container">
                <h1 className="add-expense-header">List of Expenses</h1>
                <ul className="list-expense-unordered">
                    <li>Transaction Number</li>
                    <li>Expense Title</li>
                    <li>Expense Amount</li>
                    <li>Transaction Time</li>
                </ul>
                    {expenses.map((expenseItem, index) => (
                        <React.Fragment key={index}>
                        <ul className="list-expense-unordered">
                            <li>{counter = counter + 1}</li>
                            <li>{expenseItem.expense}</li>
                            <li>{expenseItem.amount}</li>
                            <li>{expenseItem.time}</li>
                        </ul>
                        </React.Fragment>
                    ))}
            </div>



        </div>

    );
};