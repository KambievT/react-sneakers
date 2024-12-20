import React from 'react'

export default function LinkIco({onClick,children,className}) {
  return (
    <>
        <button onClick={onClick} className={className}>
            {children}
        </button>
    </>
  )
}
