import React from 'react'

export default function Card({onClick,children,className}) {
  return (
    <>
        <div className={className} onClick={onClick}>
            {children}
        </div>
    </>
  )
}
