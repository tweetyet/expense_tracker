/* eslint-disable react/prop-types */
import React from "react";

const ExpenseSummaryCard = ({
  label,
  amount,
  icon: Icon,
  colorClass,
  iconColor,
}) => {
  return (
    // <div
    //   className={`${colorClass ? colorClass : "bg-amber-100"} p-4 rounded-xl shadow-sm flex items-center gap-4 card-hover transition`}
    // >
    //   <div className="col gap-16 md:gap-12">
    //     <p className="text-xs text-[#43302E]/70">{label}</p>
    //     <p className="text-sm font-medium text-[#43302E]">${amount}</p>
    //     <div
    //       className={`p-2 rounded-full bg-[#43302E] ${iconColor ? iconColor : "text-[#43302E]"}`}
    //     ><Icon size={16} color={iconColor}/></div>
    //   </div>
    // </div>
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
