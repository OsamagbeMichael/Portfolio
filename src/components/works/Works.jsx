import React from 'react';
import html from "./assets/html.png"
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import ReactImg from './assets/react.png';
import node from './assets/node.png';
import FireBase from './assets/firebase.png';
import github from './assets/github.png';
import tailwind from './assets/tailwind.png';
import mongo from './assets/mongo.png';
import python from './assets/python.png';
import "./works.scss";


const Works = () => {
  return (

<div className='works'>
      <div className='writings'>
        <h1 className="Header-1">Skills </h1>
      
        <div className="First-property">
          <div className="omo-Ale"> 
              <img src = {html} alt=""/>
                  <h3>HTML</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {javascript} alt=""/>
                  <h3>Javacript</h3>
          </div>

          <div className="omo-Ale"> 
              <img src = {css} alt=""/>
                  <h3>CSS</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {ReactImg} alt=""/>
                  <h3>React</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {node} alt=""/>
                  <h3>NODE</h3>
          </div>

          <div className="omo-Ale"> 
              <img src = {FireBase} alt=""/>
                  <h3>FIREBASE</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {github} alt=""/>
                  <h3>GITHUB</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {tailwind} alt=""/>
                  <h3>TAILWIND</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {mongo} alt=""/>
                  <h3>MONGODB</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {python} alt="" style={{maxWidth: '60%', maxHeight: '60%'}}/>
                  <h3>PYTHON</h3>
          </div>


        </div>
    </div>
</div>

    
    // <div className='works' >
    //   {/* Container */}
    //       <div>
    //           <h1 className='Header-1'>Skills</h1>
    //           <p className='Header-2'> These are the technologies I've worked with</p>
          
    //           </div>
    //       <div className='First-Property'>
    //               <img  src={html} alt="HTML icon" />
    //               <p className='my-4'>HTML</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={css} alt="HTML icon" />
    //               <p className='my-4'>CSS</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={javascript} alt="HTML icon" />
    //               <p className='my-4'>JAVASCRIPT</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={ReactImg} alt="HTML icon" />
    //               <p className='my-4'>REACT</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={github} alt="HTML icon" />
    //               <p className='my-4'>GITHUB</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={node} alt="HTML icon" />
    //               <p className='my-4'>NODE JS</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={mongo} alt="HTML icon" />
    //               <p className='my-4'>MONGO DB</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={tailwind} alt="HTML icon" />
    //               <p className='my-4'>TAILWIND</p>
    //           </div>

    //           <div className='First-Property'>
    //               <img  src={python} alt="HTML icon" />
    //               <p className='my-4'>PYTHON</p>
    //           </div>
    //           <div className='First-Property'>
    //               <img  src={FireBase} alt="HTML icon" />
    //               <p className='my-4'>FIREBASE</p>
    //           </div>
    //       </div>
        
  );
};

export default Works;