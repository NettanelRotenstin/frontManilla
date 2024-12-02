import React from 'react'
import '../Style/Orders.css'

export default function Orders() {
  return (
    <div className='orders'>
      <h2>הנחיות למילוי המנילה⚠️</h2>
      <hr />
      <div className='input-range'>
      <p>5</p>
      <input type="range" min={1} max={5} />
      <p>1</p>
      </div>
      <div className='options'>
        <p>5 - רוצה מאוד</p>
        <p>1 - לא רוצה בכלל</p>
      </div>
      <br />
      <hr />
      <p>צה"ל אינו מתחייב לשבץ אתכם על פי העדפותיכם, אך אנו עושים מאמץ להתחשב בהן</p>
      <hr />
      <p>מילוי הערות אישיות מגדיל את הסיכוי שנוכל להתאים את השיבוץ להעדפותיכם</p>
    </div>
  )
}
