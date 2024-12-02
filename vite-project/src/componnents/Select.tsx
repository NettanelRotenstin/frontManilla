import React from 'react'
import '../Style/Select.css'
import Radio from './Radio'
interface Props {
  title: string,
  options: string[]
}

export default function Select({ title, options }: Props) {
  return (
    <div className='select'>
      <h2>{title}</h2>
      <hr />
      <div>
        <Radio option={options[0]}/>
      </div>
      <div>
        <Radio option={options[1]}/>
      </div>
      <div>
        <Radio option={options[2]}/>
      </div>
      <div>
        <Radio option={options[3]}/>
      </div>
    </div>
  )
}
