
import './App.css';
import Contactme from './content/contactme';

import{Showprofile} from './content/header';

import Themeswitcher from './content/themeswitcher';
import React,{useState,Suspense}  from 'react';
import About from './content/about';
import Stars from './content/backgroundAnimation';


function App() {
let docTitle = document.title;
window.addEventListener("blur",()=>{
  document.title="Come Back <😊";
})
window.addEventListener("focus",()=>{
  document.title=docTitle;
})
  return (
    <div className="App" >
{/*      
<Online> */}
      <Themeswitcher/>
      <Stars/>
      <Showprofile/>
      <About/>
      <Contactme/>
    </div>
  );
}

export default App;
