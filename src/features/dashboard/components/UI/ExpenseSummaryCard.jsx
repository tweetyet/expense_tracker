/* eslint-disable react/prop-types */

const ExpenseSummaryCard = ({
  label,
  amount,
  icon: Icon,
  colorClass,
  iconColor
}) => {
  return (
    
    <div
  className={`
    ${colorClass || "bg-white/60 backdrop-blur"}
    p-4 rounded-xl shadow-sm flex items-center justify-between
    hover:shadow-md transition-all duration-200
  `}
>
  {/* Left Content */}
  <div className="flex flex-col">
    <p className="text-xs text-[#43302E]/70">
      {label}
    </p>

    <p className="text-lg font-semibold text-[#43302E]">
      {amount}
    </p>
  </div>

  {/* Icon */}
  <div
    className={`
      p-3 rounded-full bg-white/70 backdrop-blur
      ${iconColor || "text-[#43302E]"}
    `}
  >
    <Icon size={18} />
  </div>
</div>
  );
};

export default ExpenseSummaryCard;
