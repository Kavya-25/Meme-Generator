import React from 'react'
import './Input.scss'

export default function Input() {
  return (
    <div className='input-box'>
    <form>
    <div className="inputs">
        <input type="text" placeholder='Top text' />
        <input type="text" placeholder='Bottom text'/>
        </div>
        <button className='inputBtn'>Get a new meme image </button>
        </form>
    </div>

  )
}
