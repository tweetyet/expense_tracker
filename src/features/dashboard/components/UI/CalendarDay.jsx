
const CalendarDay = ({day,date,isActive}) => {
  return (
    <div className={`flex flex-col gap-2 items-center justify-center w-12 h-12 rounded-lg cursor-pointer ${isActive ? 'bg-[#43302E] text-white' : 'bg-gray-100 text-gray-500'}`}>

      <span className="text-sm font-medium">{day}</span>
      <span className="text-xs">{date}</span>
      
    </div>
  )
}

export default CalendarDay
