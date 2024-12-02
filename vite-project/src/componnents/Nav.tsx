import React from 'react'
import '../Style/Nav.css'

export default function Nav() {
    return (
        <div className='nav'>
            <div className='nav-left'>
                <p>?מה חדש</p>
                <p>תפריט מנות קרב</p>
                <p>צור קשר</p>
            </div>
            <div className='nav-right'>
                <p>מנילה צבאית</p>
                <img src="http://localhost:8080/assets/Badge_of_the_Israel_Defense_Forces.new.svg-D2aDM_dl.png"/>
            </div>
        </div>
    )
}
