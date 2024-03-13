import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A chair 1",
    amount: 34.84,
    date: new Date("2024-02-26"),
  },
  {
    id: "e2",
    description: "A pair of shoes",
    amount: 24.44,
    date: new Date("2022-04-12"),
  },
  {
    id: "e3",
    description: "Grapes",
    amount: 9.55,
    date: new Date("2023-10-22"),
  },
  {
    id: "e4",
    description: "Novel Malioboro",
    amount: 10.55,
    date: new Date("2023-11-07"),
  },
  {
    id: "e5",
    description: "A chair",
    amount: 34.84,
    date: new Date("2023-08-26"),
  },
  {
    id: "e6",
    description: "A pair of shoes",
    amount: 24.44,
    date: new Date("2022-04-12"),
  },
  {
    id: "e7",
    description: "Grapes",
    amount: 9.55,
    date: new Date("2023-10-22"),
  },
  {
    id: "e8",
    description: "Novel Malioboro",
    amount: 10.55,
    date: new Date("2023-11-07"),
  },
  {
    id: "e9",
    description: "A chair",
    amount: 34.84,
    date: new Date("2023-08-26"),
  },
  {
    id: "e10",
    description: "A pair of shoes",
    amount: 24.44,
    date: new Date("2022-04-12"),
  },
  {
    id: "e11",
    description: "Grapes",
    amount: 9.55,
    date: new Date("2023-10-22"),
  },
  {
    id: "e12",
    description: "Novel Malioboro",
    amount: 10.55,
    date: new Date("2023-11-07"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  deleteExpense: (id) => {},
  addExpense: ({ description, amount, date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expenseReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const newId = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: newId }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;

      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };
  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const value = {
    expenses: expenseState,
    addExpense,
    deleteExpense,
    updateExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
