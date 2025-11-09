import React from 'react'

const Input = ({type, placeholder}) => {
  return (
<input
  type={type}
  placeholder={placeholder}
  className="bg-[#f3f3f3] p-2 rounded-sm outline-none focus:ring-2 focus:ring-[#00000033] transition duration-200"
/>
  )
}

export default Input
