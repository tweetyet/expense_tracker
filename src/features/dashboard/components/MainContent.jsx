import {
  Bell,
  Car,
  Film,
  Receipt,
  Search,
  ShoppingBasket,
  TrendingDownIcon,
  TrendingUp,
  Wallet,
} from "lucide-react";
import ExpenseSummaryCard from "./UI/ExpenseSummaryCard";
import ListItemCard from "./UI/ListItemCard";
import AccountCard from "./UI/AccountCard";
import Payments from "./UI/Payments";
import AddExpenseForm from "./UI/AddExpenseForm";
import { useState } from "react";
import FilterTab from "./UI/FilterTab";

const MainContent = () => {
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    category: "",
    date: "",
    type: "",
  });
  const [editingId, seteditingId] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState("all");

  const totalIncome = expenses
    .filter((exp) => exp.type === "income")
    .reduce((acc, exp) => acc + exp.amount, 0);

  const totalExpense = expenses
    .filter((exp) => exp.type === "expense")
    .reduce((acc, exp) => acc + exp.amount, 0);

  const balance = totalIncome - totalExpense;

  const filteredExpenses = expenses.filter((exp) => {
    if (filter === "All") {
      return true;
    }
    return exp.type === filter;
  });

  return (
   
    <div className="flex-1 p-4 sm:p-6 space-y-6 font-sans">

  {/* Header */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
    <div>
      <h2 className="text-xl sm:text-2xl font-semibold text-[#43302E] font-serif">
        Welcome back, Dear
      </h2>

      <p className="text-sm text-[#43302E]/60 mt-1">
        Here’s what’s happening with your accounts today.
      </p>
    </div>

    <div className="flex items-center gap-2">
      <button className="p-2 rounded-full bg-white/60 backdrop-blur hover:bg-[#FFF1B5]/70 transition">
        <Search size={16} className="text-[#43302E]" />
      </button>

      <button className="p-2 rounded-full bg-white/60 backdrop-blur hover:bg-[#FFF1B5]/70 transition">
        <Bell size={16} className="text-[#43302E]" />
      </button>
    </div>
  </div>

  {/* Summary Cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    <ExpenseSummaryCard
      label="Spent This Month"
      amount={`$${totalExpense.toFixed(2)}`}
      icon={TrendingDownIcon}
      colorClass="bg-[#FFF1B5]/50"
    />

    <ExpenseSummaryCard
      label="Income"
      amount={`$${totalIncome.toFixed(2)}`}
      icon={TrendingUp}
      colorClass="bg-[#C1DBEB]/50"
    />

    <ExpenseSummaryCard
      label="Balance"
      amount={`$${balance.toFixed(2)}`}
      icon={Wallet}
    />
  </div>

  {/* Main Section (Form + List) */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

    {/* Form */}
    <AddExpenseForm
      formData={formData}
      setFormData={setFormData}
      editingId={editingId}
      setEditingId={seteditingId}
      expenses={expenses}
      setExpenses={setExpenses}
    />

    {/* Recent Spending */}
    <div className="bg-white/60 backdrop-blur p-5 rounded-xl shadow-sm">
      <h3 className="text-lg font-semibold text-[#43302E] mb-4">
        Recent Spending
      </h3>

      <div className="mb-3">
        <FilterTab filter={filter} setFilter={setFilter} />
      </div>

      <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
        {filteredExpenses.length === 0 ? (
          <p className="text-sm text-gray-500">
            No transactions found
          </p>
        ) : (
          filteredExpenses.map((item) => (
            <ListItemCard
              key={item.id}
              title={item.description}
              subtitle={item.category}
              value={`${
                item.type === "expense" ? "-" : "+"
              }$${item.amount}`}
              valueColor={
                item.type === "expense"
                  ? "text-red-500"
                  : "text-green-500"
              }
              src="/user1.jpeg"
            />
          ))
        )}
      </div>
    </div>
  </div>

  {/* Budgets Section */}
  <div className="bg-white/60 backdrop-blur p-5 rounded-xl shadow-sm">

  
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
      <h3 className="text-lg font-semibold text-[#43302E]">
        My Budgets
      </h3>

      <button className="text-sm text-[#43302E]/70 hover:underline">
        Manage All
      </button>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <AccountCard
        name="Groceries"
        description="Spending: $500 / $1,000"
        actionLabel="50% Spent"
        Icon={ShoppingBasket}
      />

      <AccountCard
        name="Transport"
        description="Spending: $200 / $400"
        actionLabel="50% Spent"
        Icon={Car}
      />

      <AccountCard
        name="Entertainment"
        description="Spending: $150 / $300"
        actionLabel="50% Spent"
        Icon={Film}
      />

      <AccountCard
        name="Bills"
        description="Spending: $800 / $1,200"
        actionLabel="67% Spent"
        Icon={Receipt}
      />
    </div>

    <div className="mt-6">
      <Payments />
    </div>
  </div>
</div>
  );
};

export default MainContent;
