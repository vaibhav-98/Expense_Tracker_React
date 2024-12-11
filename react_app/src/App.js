import "./App.css";
import Expenses from "./Componets/Expenses/Expenses";

function App() {

      let expenses = [
        {
          id:'e1',
          title: "School fee",
          amount: 200,
          date: new Date(2024,10,10)
      },
      {
        id:'e2',
        title: "Books",
        amount: 200,
        date: new Date(2024,10,10)
    },
    {
      id:'e3',
      title: "House rent",
      amount: 200,
      date: new Date(2024,10,10)
  },
  {
    id:'e4',
    title: "Travel",
    amount: 200,
    date: new Date(2024,10,10)
},
    ]
  return (
    <div>
      <h2> Let's get started</h2>
       < Expenses item={expenses}/>
   
    </div>
  );
}

export default App;


// {/* <componet1 >

//    < componets2/>

// </componet1> */}

