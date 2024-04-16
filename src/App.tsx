import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup/ListGroup";
import { FaRegCalendarPlus } from "react-icons/fa";
import Like from "./components/Like";
import ExpandableText from "./components/ExpandableText";
import Form from "./components/Form/Form";
import FormUseState from "./components/Form/FormUseState";
import FormRectHook from "./components/Form/FormRectHook";
import ExpenseTracker from "./components/expense-tracker/components/ExpenseTracker";
import ExpensesFilter from "./components/expense-tracker/components/ExpensesFilter";
import ExpenseForm from "./components/expense-tracker/components/ExpenseForm";

function App() {
  // // Exercise No.1 Object
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: {
  //     name: "peter",
  //   },
  // });
  // const handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "nagy" } });
  // };

  // // Exercise No.2 Array
  // const [pizza, setPizza] = useState({
  //   name: "Spicy Pepproni",
  //   toppings: ["Mushroom"],
  // });
  // const handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "new Sttuf"] });
  //   console.log(pizza);
  // };

  // // Exercise No.3 Cart
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, name: "propduct 1", quantity: 1 },
  //     { id: 2, name: "propduct 2", quantity: 1 },
  //   ],
  // });

  // //
  // const handleClick = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: 2 } : item
  //     ),
  //   });
  // };

  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Milk",
      category: "Groceries",
      amount: 5,
    },
    {
      id: 2,
      description: "Egg",
      category: "Utilitis",
      amount: 5,
    },
    {
      id: 3,
      description: "chiken",
      category: "Groceries",
      amount: 5,
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category == selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        ></ExpenseForm>
      </div>

      <ExpensesFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      ></ExpensesFilter>
      <ExpenseTracker
        expenses={filteredExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      >
        {" "}
      </ExpenseTracker>
      {/* <FormRectHook></FormRectHook> */}
      {/* <FormUseState></FormUseState> */}
      {/* <Form></Form> */}
    </div>
  );
}

export default App;
