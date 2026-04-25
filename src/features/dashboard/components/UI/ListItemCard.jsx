const ListItemCard = ({ title, subtitle, value, valueColor, src }) => {
  return (
    <div className="flex items-center justify-between cursor-pointer bg-[#FFF1B5]/30 p-4 hover:shadow-2xl hover:shadow-[#43302E]/30 transition-all duration-100 ease-in-out rounded-lg">
      <div className="flex items-center space-x-3">
        <div className="size-9 bg-[#FFF1B5] rounded-full center-item text-xs text-zinc-400 overflow-clip">
          {src ? (
            <img src={src} alt="icon" className="size-full" />
          ) : (
            <span>IC</span>
          )}
        </div>

        <div>
            <p className="font-medium text-[#43302E]">{title}</p>
            <p className="text-sm text-[#43302E]/70">{subtitle}</p>
        </div>
        <div>
          <p className={`font-bold ${valueColor} items-end` }>{value}</p>
        </div>
        

      </div>
    </div>
  );
};

export default ListItemCard;
