import './App.css';
import AddExpense from './component/AddExpenses';
import Budget from './component/Budget';

function App() {
  return (
    <div className="app">
      {/* navbarhere */}
      <div className="welcome-header">
        <h1>Welcome To Expense Tracker</h1>
      </div>
      <div className='container-expense-components'>
        <Budget></Budget>
        <AddExpense></AddExpense>
      </div>
    
      

    </div>
  );
}

export default App;
