import React from 'react'
import "./about.css";
export default function About() {
  return (
    <div className='about-parent-container'>
        <h1 style={{textAlign:"center"}}>About me</h1>
        <div className='about-child-container'>
       <ul>
       <li><span className='triangular-bullet'>‣</span>I am a  Student at Rewathith High School, Gopalganj.</li>
       <li><span className='triangular-bullet'>‣</span>I am 😊 &lt; 3.</li>
       </ul>
       </div>  
    </div>
  )
}
