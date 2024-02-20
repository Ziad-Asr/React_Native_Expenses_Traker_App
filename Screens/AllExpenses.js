import { useContext } from "react";
import ExpensesOutput from "../Components/ExpensesOutPut/ExpensesOutPut";

import { ExpensesContext } from "../store/expenses-context";

function AllExpenses() {
  const expensesCtx = useContext(ExpensesContext);

  return (
    <ExpensesOutput expenses={expensesCtx.expenses} expensesPeriod="Total" />
  );
}

export default AllExpenses;
