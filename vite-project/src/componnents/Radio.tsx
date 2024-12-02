import React from 'react'
import '../Style/Radio.css'
interface Props {
    option: string
}
export default function Radio({ option }: Props) {
    return (
        <div className='radio'>
            <h3>{option}</h3>
            <div className='rbts'>
                    <input className='rbt' type="radio" id="1" value="1" name={option} checked />
                    <label>1</label>
                    <input className='rbt' type="radio" id="2" name={option} value="2" />
                    <label>2</label>
                    <input className='rbt' type="radio" id="3" name={option} value="3" />
                    <label>3</label>
                    <input className='rbt' type="radio" id="4" name={option} value="4" />
                    <label>4</label>
                    <input className='rbt' type="radio" id="5" name={option} value="5" />
                    <label>5</label>
                </div>
            </div>
    )
}
