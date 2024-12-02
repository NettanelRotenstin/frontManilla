import React from 'react'
interface Props{
    options:string[]
}
export default function Option({options}:Props) {
  return (
    <div>
        <p>{options[0]}</p>
        
    </div>
  )
}
