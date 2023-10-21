import React,{useEffect} from 'react';
import './header.css';
import pic from './profile/WhatsApp Image 2023-10-21 at 7.19.43 PM.jpeg';
import TextTransition, { presets } from 'react-text-transition';
export function Showprofile() {
  const TEXTS = ['student', 'Gamer'];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000,
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <div className='Showprofile'>

       <div className='show-about-name'>
       <h1 className='I-am-Full-stack-h1'>Hello, I am Mohit kumar</h1>
       <h2 className='I-am-Full-stack'>I am a <span className='element' style={{color:"blue"}}><TextTransition springConfig={presets.wobbly} inline="true">{TEXTS[index % TEXTS.length]}</TextTransition></span></h2>
       </div>
<img src={pic} className='profile-pic' alt="profile-pic"/>

    </div>
  )
}
