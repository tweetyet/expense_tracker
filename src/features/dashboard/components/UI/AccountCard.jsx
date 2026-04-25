import React from "react";

const AccountCard = ({
  name,
  description,
  Icon,
  iconColor,
  actionLabel,
  actionColor,
  bgColor,
}) => {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm card-hover transition hover:shadow-md transition-all duration-200">
      <div className="flex items-center space-x-3">
        <div
          className={`w-9 h-9 ${bgColor ? bgColor : "bg-amber-200"} rounded-full center-item text-xs text-zinc-400 overflow-clip`}
        >
          {Icon ? (
            <Icon size={16} className={`${iconColor}`} />
          ) : (
            <span className="text-sm text-[#43302E] center-item h-full">
              IC
            </span>
          )}
        </div>

        <div>
            <p className="font-medium text-[#43302E]">{name}</p>
            <p className="text-sm text-[#43302E]/70">{description}</p>
        </div>

        <div>
            {actionLabel && <span className={`text-xs px-2 py-1 font-semibold ${actionColor}`}>{actionLabel}</span>}
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
