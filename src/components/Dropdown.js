import React from 'react'

const Dropdown = ({ options = [], value, onChange, className = "" }) => {
  return (
    <div className={`relative ${className}`}>
      <select
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className="bg-[#f3f3f3] p-2 rounded-sm w-[200px]  outline-none focus:ring-2 focus:ring-[#00000033] transition duration-200"
      >
        {options.map((option, index) => (
          <option key={index} value={option} >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
