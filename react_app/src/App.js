import "./App.css";
import ExpenseItem from "./Componets/Expenseitem";

function App() {

     let expenseDate = new Date(2024, 12 , 6);
     let expenseTitle = "School fee";
    let expenseAmount = 400
  return (
    <div>
      <h2> Let's get started</h2>
       <ExpenseItem  
       date={expenseDate}
       title={expenseTitle} 
       amount={expenseAmount}>
       </ExpenseItem>
    </div>
  );
}

export default App;
