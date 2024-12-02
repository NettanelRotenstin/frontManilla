import React from 'react'
 
export default function Radio() {
    return (
        <div className='radio'>
            <div>
                <input type="radio" id="1" value="1" checked />
                <label>1</label>
            </div>
            <div>
                <input type="radio" id="2" value="1" checked />
                <label>2</label>
            </div>
            <div>
                <input type="radio" id="3" value="1" checked />
                <label>3</label>
            </div>
            <div>
                <input type="radio" id="4" value="1" checked />
                <label>4</label>
            </div>
            <div>
                <input type="radio" id="5" value="1" checked />
                <label>5</label>
            </div>
        </div>
    )
}
