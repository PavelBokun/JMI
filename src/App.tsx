import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


const[number1,setNumber]=useState(0)
const num=()=>{
setNumber( number1+1)
  
}





  return (
    <div className="App">
     <button className='btn' onClick={num}>ЖМИ СЮДА</button>
     {/* <button className='btn'>ЖМИ не СЮДА</button> */}
<div className='kak'>{number1}</div>
    </div>
  );
}

export default App;
