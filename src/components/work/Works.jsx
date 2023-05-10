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


export default function Works() {
  return (

<div className="works">
      <div className='writings'>
        <h1 className="Header-1">Skills </h1>
      
        <div className="First-property">
          <div className="omo-Ale"> 
              <img src = {html} alt="" />
                  <h3>HTML</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {javascript} alt="" />
                  <h3>Javacript</h3>
          </div>

          <div className="omo-Ale"> 
              <img src = {css} alt="" />
                  <h3>CSS</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {ReactImg} alt=""/>
                  <h3>React</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {node} alt="" />
                  <h3>NODE</h3>
          </div>

          <div className="omo-Ale"> 
              <img src = {FireBase} alt="" />
                  <h3>FIREBASE</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {github} alt="" />
                  <h3>GITHUB</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {tailwind} alt="" />
                  <h3>TAILWIND</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {mongo} alt="" />
                  <h3>MONGODB</h3>
          </div>
          <div className="omo-Ale"> 
              <img src = {python} alt="" style={{maxWidth: '50%', maxHeight: '50%'}}/>
                  <h3>PYTHON</h3>
          </div>


        </div>
    </div>
</div>

    
        
  )
}

