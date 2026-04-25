
// const EventCard = ({time,title,participants,icon:Icon}) => {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4">
//       <div className="size-8 flex items-center justify-center bg-[#FFF1B5] rounded-full  text-[#43302E]">
//         <Icon size={16} />

//         <div className="flex-1 font-serif ">
//             <p className="text-xs text-[#43302E]">
//                 {time}
//             </p>
//             <p className="font-medium text-[#43302E]">
//                 {title}
//             </p>
           
//                 {participants && <div className="text-xs text-[#43302E]/60 overflow-hidden flex space-x-2 ">
// {Array.from({length:participants}).map((_,i) => (
//     <div key={i} className="w-5 h-5 rounded-full bg-[#C1DBEB] border border-white -ml-2 first:ml-0 flex items-center justify-center text-[#43302E] text-xs">
//         A
//     </div>
// ))}
//            </div>}
//         </div>

//       </div>
//     </div>
//   )
// }

// export default EventCard

const EventCard = ({ time, title, participants, icon: Icon }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm flex items-center gap-4 card-hover transition">
      
      {/* Icon */}
      <div className="w-8 h-8 flex items-center justify-center bg-[#FFF1B5] rounded-full text-[#43302E]">
        <Icon size={16} />
      </div>

      {/* Content */}
      <div className="flex-1 font-serif">
        <p className="text-xs text-[#43302E]/70">
          {time}
        </p>

        <p className="text-sm font-medium text-[#43302E]">
          {title}
        </p>

        {/* Participants */}
        {participants && (
          <div className="flex items-center mt-2">
            {Array.from({ length: participants }).map((_, i) => (
              <div
                key={i}
                className="w-5 h-5 rounded-full bg-[#C1DBEB] border border-white 
                -ml-2 first:ml-0 flex items-center justify-center 
                text-[#43302E] text-[10px]"
              >
                A
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventCard;
