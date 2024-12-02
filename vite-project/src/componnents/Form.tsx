import React from 'react'
import Orders from './Orders'
import Select from './Select'
import Comment from './Comment'
import Name from './Name'
import '../Style/Form.css'

export default function Form() {
    const handleSend = async()=>{

    }
    return (
        <div className='form-'>
            <Name />
            <Orders />
            <Select title='רצון לשרת כלוחם בזרוע היבשה' options={["גולני","שיריון","תותחנים","חילוץ והצלה"]} />
            <Select title='רצון לשרת כגובניק' options={["משק ממטרות","רסר בנימרודי","טבח","ממלא מקרר בסנדוויצ'ים"]} />
            <Select title='רצון לשרת בתכנית קודקוד' options={["מפתח פולסטאק","מפתח דאטא","מפתח דבאופס","תורן"]}/>
            <Comment />
            <button onClick={handleSend} className='send'>שלח טופס</button>
        </div>
    )
}
