import "./intro.scss";
import {init} from 'ityped'
import { TypeAnimation } from 'react-type-animation';


export default function Intro() {




  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">  
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Uhunmwagho Osamagbe</h1>
          <h3>
            Let us talk about {" "}
            <TypeAnimation
               sequence={[
               'Web Development',
                1000,
               'Machine Learning ',
               1000,
               'Data Science',
               1000,
            ]}
            speed={40} // Custom Speed from 1-99 - Default Speed: 40
            style={{ fontSize: '1em'}}
            wrapper="span" // Animation will be rendered as a <span>
            repeat={Infinity} // Repeat this Animation Sequence infinitely 
            />        
          </h3>
          
        </div>
        <a href="#portfolio">
          <img src="assets/Icon.png" alt="" />
        </a>
      </div>
    </div>
  );
}