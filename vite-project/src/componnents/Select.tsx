import React from 'react'
import Radio from './Radio'
interface Props {
  title: string,
  options: string[]
}

export default function Select({ title, options }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <Radio />
    </div>
  )
}
