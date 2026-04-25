import {
  Bell,
  Car,
  Film,
  Receipt,
  Search,
  ShoppingBasket,
  TrendingDown,
  TrendingDownIcon,
  TrendingUp,
  Wallet,
} from "lucide-react";
import ExpenseSummaryCard from "./UI/ExpenseSummaryCard";
import ListItemCard from "./UI/ListItemCard";
import AccountCard from "./UI/AccountCard";
import Payments from "./UI/Payments";

const MainContent = () => {
  return (
  //   <div className="flex-1 space-y-8 font-sans">
  //     <div className="p-6 flex items-center justify-between">
  //       <div>
  //         <h2 className="text-2xl tracking-tighter font-bold text-[#43302E] mb-1 font-serif">
  //           Welcome back, Tweety
  //         </h2>

  //         <p className="text-[#43302E]/70 font-serif ">
  //           Here's what's happening with your accounts today.
  //         </p>
  //       </div>

  //       <div className="flex items-center space-x-4">
  //         <button className="p-2 rounded-full bg-[#C1DBEB] hover:bg-[#FFF1B5] transition-colors">
  //           <Search size={16} className="text-[#43302E]" />
  //         </button>

  //         <button className="p-2 rounded-full bg-[#C1DBEB] hover:bg-[#FFF1B5] transition-colors">
  //           <Bell size={16} className="text-[#43302E]" />
  //         </button>
  //       </div>
  //     </div>

  //     <div className="grid md:grid-cols-3 gap-6">
  //       <ExpenseSummaryCard
  //         label="Spent This Month"
  //         amount="$1,234.56"
  //         icon={TrendingDownIcon}
  //         colorClass="bg-[#FFF1B5]/60"
  //         iconColor="text-[#43302E]"
  //       />

  //       <ExpenseSummaryCard
  //         label="Income"
  //         amount="$3,200.00"
  //         icon={TrendingUp}
  //         colorClass="bg-[#C1DBEB]/60"
  //         iconColor="text-[#43302E]"
  //       />

  //       <ExpenseSummaryCard
  //         label="Balance"
  //         amount="$5,800.00"
  //         icon={Wallet}
  //         colorClass="bg-white/60 backdrop-blur"
  //         iconColor="text-emerald-500"
  //       />
  //     </div>

  //     <div className="grid lg:grid-cols-2 gap-6">
  //       <div className="p-6">
  //         <h3 className="text-lg font-bold text-[#43302E] mb-4">
  //           Recent Spending
  //         </h3>
  //         <div className="space-y-3">
  //           <ListItemCard
  //             title="Supermarket Run"
  //             subtitle="Grocery store"
  //             value="$160.00"
  //             valueColor="text-red-500"
  //             src="/user1.jpeg"
  //           />

  //           <ListItemCard
  //             title="Online Subscription"
  //             subtitle="Software service"
  //             value="$10.00"
  //             valueColor="text-red-500"
  //             src="/user2.jpeg"
  //           />

  //           <ListItemCard
  //             title="Amazon Purchase"
  //             subtitle="Online store"
  //             value="$30.00"
  //             valueColor="text-red-500"
  //             src="/user3.jpeg"
  //           />

  //           <ListItemCard
  //             title="Payment to koko"
  //             subtitle="Peer-to-peer transfer"
  //             value="$70.00"
  //             valueColor="text-red-500"
  //             src="/ET.jpeg"
  //           />
  //         </div>
  //       </div>
  //     </div>

  //     <div className="p-6 ">
  //       <h3 className="text-lg tracking-tight font-bold text-[#43302E] mb-4 flex justify-between items-center">
  //         My Budgets
  //         <button className="text-sm font-normal cursor-pointer text-[#43302E] hover:underline font-serif">
  //           Manage All
  //         </button>
  //       </h3>

  //       <div className="space-y-3">
  //         <AccountCard
  //           name="Groceries"
  //           description="Spending: $500/$1,000"
  //           color="#FBBF24"
  //           actionLabel="75% Spent"
  //           actionColor="text-[#FBBF24]"
  //           bgColor="bg-[#FBBF24]/20"
  //           Icon={ShoppingBasket}
  //           iconColor="text-[#FBBF24]"
  //         />

  //          <AccountCard
  //   name="Transport"
  //   description="Spending: $200 / $400"
  //   actionLabel="50% Spent"
  //   color="#C1DBEB"
  //   bgColor="bg-[#C1DBEB]/50"
  //   actionColor="text-[#43302E]"
  //   Icon={Car}
  //   iconColor="text-[#43302E]"
  // />

  // <AccountCard
  //   name="Entertainment"
  //   description="Spending: $150 / $300"
  //   actionLabel="50% Spent"
  //   color="#FFF1B5"
  //   bgColor="bg-[#FFF1B5]/30"
  //   actionColor="text-[#43302E]"
  //   Icon={Film}
  //   iconColor="text-[#43302E]"
  // />

  // <AccountCard
  //   name="Bills"
  //   description="Spending: $800 / $1,200"
  //   actionLabel="67% Spent"
  //   color="#C1DBEB"
  //   bgColor="bg-[#C1DBEB]/30"
  //   actionColor="text-[#43302E]"
  //   Icon={Receipt}
  //   iconColor="text-[#43302E]"
  // />

  //       </div>
  //     </div>
  //   </div>
  <div className="flex-1 p-6 space-y-8 font-sans">

  {/* Header */}
  <div className="flex items-center justify-between">
    <div>
      <h2 className="text-2xl font-semibold text-[#43302E] font-serif">
        Welcome back, Tweety
      </h2>

      <p className="text-sm text-[#43302E]/60 mt-1">
        Here’s what’s happening with your accounts today.
      </p>
    </div>

    <div className="flex items-center gap-3">
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
      amount="$1,234.56"
      icon={TrendingDownIcon}
      colorClass="bg-[#FFF1B5]/50"
      iconColor="text-[#43302E]"
    />

    <ExpenseSummaryCard
      label="Income"
      amount="$3,200.00"
      icon={TrendingUp}
      colorClass="bg-[#C1DBEB]/50"
      iconColor="text-[#43302E]"
    />

    <ExpenseSummaryCard
      label="Balance"
      amount="$5,800.00"
      icon={Wallet}
      colorClass="bg-white/60 backdrop-blur"
      iconColor="text-[#43302E]"
    />
  </div>

  {/* Recent Spending */}
  <div className="bg-white/60 backdrop-blur p-5 rounded-xl shadow-sm">
    <h3 className="text-lg font-semibold text-[#43302E] mb-4">
      Recent Spending
    </h3>

    <div className="space-y-3 ">
      <ListItemCard
        title="Supermarket Run"
        subtitle="Grocery store"
        value="-$160.00"
        valueColor="text-red-500"
        src="/user1.jpeg"
      />

      <ListItemCard
        title="Online Subscription"
        subtitle="Software service"
        value="-$10.00"
        valueColor="text-red-500"
        src="/user2.jpeg"
      />

      <ListItemCard
        title="Amazon Purchase"
        subtitle="Online store"
        value="-$30.00"
        valueColor="text-red-500"
        src="/user3.jpeg"
      />

      <ListItemCard
        title="Payment to Koko"
        subtitle="Transfer"
        value="-$70.00"
        valueColor="text-red-500"
        src="/ET.jpeg"
      />
    </div>
  </div>

  {/* Budgets */}
  <div className="bg-white/60 backdrop-blur p-5 rounded-xl shadow-sm">
    
    <div className="flex justify-between items-center mb-4">
      <h3 className="text-lg font-semibold text-[#43302E]">
        My Budgets
      </h3>

      <button className="text-sm text-[#43302E]/70 hover:underline">
        Manage All
      </button>
    </div>

    <div className="grid sm:grid-cols-2 gap-4 ">
      <AccountCard
        name="Groceries"
        description="Spending: $500 / $1,000"
        actionLabel="50% Spent"
        bgColor="bg-[#FFF1B5]/40"
        actionColor="text-[#43302E]"
        Icon={ShoppingBasket}
        iconColor="text-[#43302E]"
      />

      <AccountCard
        name="Transport"
        description="Spending: $200 / $400"
        actionLabel="50% Spent"
        bgColor="bg-[#C1DBEB]/40"
        actionColor="text-[#43302E]"
        Icon={Car}
        iconColor="text-[#43302E]"
      />

      <AccountCard
        name="Entertainment"
        description="Spending: $150 / $300"
        actionLabel="50% Spent"
        bgColor="bg-[#FFF1B5]/30"
        actionColor="text-[#43302E]"
        Icon={Film}
        iconColor="text-[#43302E]"
      />

      <AccountCard
        name="Bills"
        description="Spending: $800 / $1,200"
        actionLabel="67% Spent"
        bgColor="bg-[#C1DBEB]/30"
        actionColor="text-[#43302E]"
        Icon={Receipt}
        iconColor="text-[#43302E]"
      />
    </div>

    <Payments/>

  </div>
</div>
  );
};

export default MainContent;
