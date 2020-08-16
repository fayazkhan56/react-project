import React, {useState} from 'react';
import './Room.css';

function Room(){
     const [islit, setlit]=useState(true);
     let [age, setage]=useState(23);

 return (
 <div className={'room ${islit ? "light" : "dark"}'}>
     This room is {islit ? "light" : "dark"}
     <br/>
     <button onClick={() => setlit(!islit)}>light button</button>
     <br/>
     <br/>
     age ={age}
     <br/>
     <button onClick={() => { setage(++age);}}> age button </button>
  </div>
 );
}
export default Room;