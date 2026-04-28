import { AlertCircle, Plus, TrendingDown, TrendingUp } from "lucide-react";

const AddExpenseForm = ({
  formData,
  setFormData,
  editingId,
  setEditingId,
  expenses,
  setExpenses,
}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (!formData.description || !formData.amount) return;

    if (editingId) {
      // edit
      const updated = expenses.map((item) =>
        item.id === editingId ? { ...formData, id: editingId } : item
      );
      setExpenses(updated);
      setEditingId(null);
    } else {
      // add
      const newExpense = {
        ...formData,
        id: Date.now(),
        amount: Number(formData.amount),
      };
      setExpenses([...expenses, newExpense]);
    }

    // reset form
    setFormData({
      type: "expense",
      description: "",
      amount: "",
      date: "",
      category: "",
    });
  };

  const handleCancel = () => {
    setEditingId(null);
    setFormData({
      type: "expense",
      description: "",
      amount: "",
      date: "",
      category: "",
    });
  };

  return (
    <div className="bg-white/60 backdrop-blur p-5 rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex items-center mb-6">
        <div className="p-2 bg-[#C1DBEB] rounded-xl mr-3">
          <Plus size={20} color="#43302E" />
        </div>
        <h2 className="text-lg font-bold text-[#43302E] tracking-wide">
          {editingId ? "Edit Entry" : "Add New Entry"}
        </h2>
      </div>

      {/* Entry Type */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2 uppercase">
          Entry Type
        </label>

        <div className="flex gap-4">
          {/* Expense */}
          <label
            className={`flex flex-1 items-center justify-center gap-2 p-4 rounded-2xl border-2 cursor-pointer transition
              ${
                formData.type === "expense"
                  ? "bg-red-100 border-red-400"
                  : "bg-white hover:bg-red-100"
              }`}
          >
            <input
              type="radio"
              name="type"
              value="expense"
              checked={formData.type === "expense"}
              onChange={handleChange}
              className="hidden"
            />
            <TrendingDown size={18} />
            Expense
          </label>

          {/* Income */}
          <label
            className={`flex flex-1 items-center justify-center gap-2 p-4 rounded-2xl border-2 cursor-pointer transition
              ${
                formData.type === "income"
                  ? "bg-green-100 border-green-400"
                  : "bg-white hover:bg-green-100"
              }`}
          >
            <input
              type="radio"
              name="type"
              value="income"
              checked={formData.type === "income"}
              onChange={handleChange}
              className="hidden"
            />
            <TrendingUp size={18} />
            Income
          </label>
        </div>
      </div>

      {/* Description */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2 uppercase">
          Description
        </label>

        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="What is this for?"
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#C1DBEB]"
        />
      </div>

      {/* Amount */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2 uppercase">
          Amount
        </label>

        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2">$</span>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full pl-8 pr-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#C1DBEB]"
          />
        </div>
      </div>

      {/* Date */}
      <div className="mb-5">
        <label className="block text-sm font-semibold mb-2 uppercase">
          Date
        </label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#C1DBEB]"
        />
      </div>

      {/* Category */}
      <div className="mb-6">
        <label className="block text-sm font-semibold mb-2 uppercase">
          Category
        </label>

        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 focus:ring-[#C1DBEB]"
        >
          <option value="">Select category</option>
          <option>Food</option>
          <option>Transport</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Salary</option>
          <option value="">Other</option>
        </select>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleSubmit}
          className="flex-1 bg-[#43302E] text-white py-3 rounded-lg hover:opacity-90"
        >
          {editingId ? "Update" : "Add Entry"}
        </button>

        <button
          onClick={handleCancel}
          className="flex-1 bg-[#C1DBEB] text-[#43302E] py-3 rounded-lg hover:opacity-90"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddExpenseForm;