import './portfolio.scss';
import PortfolioList from '../portfolioList/PortfolioList';
import { useEffect,useState } from 'react';

import {
  featuredPortfolio,
  webPortfolio,
  machineLearning,
  designPortfolio,
  contentPortfolio,
} from "../../data";
export default function Portfolio() {
  const [selected,setSelected] = useState("featured");
  const [data,setData] =  useState([]);
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Machine Learning",
    },
    {
      id: "design",
      title: "Design",
    },
    {
      id: "content",
      title: "Content",
    },
  ];


  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(machineLearning);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "content":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className='portfolio' id = "portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className='container'>
        {data.map((d)=>(
          <div className="item">
            <img src={d.img} alt = ""/>{d.title}



          </div>
        ))}
        <div className='item'>
          <img src ="assets/a.png" alt=""/>
          <h3>Simulation of Autonomous vehicles</h3>
        </div>
        
        <div className='item'>
          <img src ="assets/d.jpeg" alt=""/>
          <h3>In progress...</h3>
        </div>
      </div>
    </div>
  )
}


