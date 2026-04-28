
const FilterTab = ({filter,setFilter}) => {
  return (
    <div className='p-2 border-b border-[#C1DBEB]'>
        <div className='flex space-x-2 bg-[#FFF1B5] rounded-2xl p-2'>
            {["All","income","expense"].map((filtertype) => (
                <button key={filtertype} onClick={()=>setFilter(filtertype)}
                className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold capitalize text-[#43302E] transition-all duration-200 hover:bg-[#C1DBEB]/80 hover:text-[#43302E]
                    ${filtertype === filter && "bg-[#43302E] text-white"}`

                }>
                    {filtertype ==="All"? "All Entries":filtertype}
                </button>
            ))

            }

            {/* <div className='flex space-x-2 bg-[#FFF1B5] rounded-2xl p-2'>
                <button className={`flex-1 py-3 px-6 rounded-xl text-sm font-semibold capitalize text-[#43302E] transition-all duration-200`}>
                    All

                </button>

            </div> */}

        </div>
      
    </div>
  )
}

export default FilterTab
