import React from 'react'
import '../Style/Comments.css'
export default function Comment() {
  return (
    <div className='comment'>
      <h3>הערות אישיות</h3>
      <input className='input-cmt' type="text" />
    </div>
  )
}
