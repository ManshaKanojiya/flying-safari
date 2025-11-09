import React from 'react'
import { CiCalendar } from "react-icons/ci";

const DatePicker = ({placeholder}) => {
    return (
        <div className="relative max-w-sm">
            
            <input datepicker id="default-datepicker" type="text" className='bg-[#f3f3f3] p-2 rounded-sm outline-none focus:ring-2 focus:ring-[#00000033] transition duration-200' placeholder={placeholder}/>
            <div className="absolute inset-y-0 end-2 flex items-center ps-3.5 pointer-events-none">
                <CiCalendar />
            </div>
        </div>

    )
}

export default DatePicker
