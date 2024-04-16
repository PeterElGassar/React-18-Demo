interface Expense {
  id: number;
  description: string;
  category: string;
  amount: number;
}
interface Props {
  expenses: Expense[];
  children: any;
  onDelete: (id: number) => void;
}

const ExpenseTracker = ({ expenses, onDelete }: Props) => {
  if (!expenses.length) return null;

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col">control</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense: Expense) => (
            <tr key={expense.id}>
              <th scope="row">{expense.category}</th>
              <td>{expense.amount}</td>
              <td>{expense.description}</td>
              <td>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => onDelete(expense.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

        <tfoot>
          <tr>
            <td>Total</td>
            <td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseTracker;
