import React from "react";
import { useState } from "react";
import "./Budget.css"

export default function Budget() {
    const [budget, setBudget] = useState(0);
    const [input, setInput] = useState("Enter Budget");

    const confirmHandler = (input) => {
        setBudget(input);
        setInput("Enter Budget");

    };

    const resetHandler = (e) => {
        e.preventDefault();
        setBudget(0);
        setInput();

    }


    return (
        <div className = "container">
            <h1 className = "main-title"> Starting Budget {budget} </h1>
            <div className = "inner-container">
                <form className = "form-container">
                    <input 
                        type="number" 
                        placeholder= {input}
                        value={input} 
                        onChange = {(d) => setInput(d.target.value)} 
                    />
                    <button onClick={(e) => { e.preventDefault(); confirmHandler(input); }}>Confirm Budget</button>
                    <button onClick = {resetHandler}>Reset Budget</button>
                </form>
                
            </div>

        </div>

    );
};