"use client"
import React from 'react'

const Button = ({ title, onClick, titleClassName = "", width = "auto", height="auto"  }) => {
  return (
   <button
      onClick={onClick}
      style={{ width, height }} 
      className="rounded-lg bg-gradient-to-r from-[#BBA3E4] to-[#E7A1A0] hover:opacity-50 transition"
    >
  <span className={titleClassName}>{title}</span>
</button>
  )
}

export default Button