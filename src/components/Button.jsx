import React from 'react'

const Button = ({ className,
    text }) => {
    return (
        <button className={`bg-black px-6 text-[16.5px] uppercase py-2.5 text-white rounded-[5px] cursor-pointer hover:text-black hover:bg-white transform transition-all ${className}`}>{text}</button>
    )
}

export default Button