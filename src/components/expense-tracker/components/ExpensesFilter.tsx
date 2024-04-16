import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpensesFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select mb-3"
        onChange={(e) => onSelectCategory(e.target.value)}
      >
        <option value="">All Categories</option>

        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpensesFilter;
