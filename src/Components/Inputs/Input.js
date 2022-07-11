import React,{useState} from 'react'
import './Input.scss'
import {memesData} from '../Data/memesData'

export default function Input() {
  
  const [memeImage,setmemeImage]=useState();

  const setimageHandler=()=>{
    const memeimageArray=memesData.data.memes;
  const randomNumber=Math.floor(Math.random()*memeimageArray.length);
  console.log(memeimageArray[randomNumber].url);
    setmemeImage(memeimageArray[randomNumber].url)

  }
  return (
    <div className='input-box'>
    <div className="inputs">
        <input type="text" placeholder='Top text' />
        <input type="text" placeholder='Bottom text'/>
        </div>
        <button className='inputBtn' onClick={setimageHandler}>Get a new meme image </button>
        <img src={memeImage} alt="" width="300px"/>
    </div>

  )
}
