import { useEffect,useState} from 'react';
import  "./portfolio.scss"
import PortfolioList from "../portfolioList/PortfolioList";
import {
  featuredPortfolio,
  webPortfolio,
  machineLearning,
  designPortfolio,
  contentPortfolio,
} from "../../data";



export default function Portfolio(){

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

  return(
    <div className = "portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item)=>(
          <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />
      ))}
      </ul>
      <div className="container">
        {data.map((d)=>(
           <div className="item" key={d.id}>
          <img src={d.img} alt=""/>
          <h3>{d.title}</h3>

        <div className='Button-XLR'>
          <a href = {d.live} >
            <button className='XLR'> Live </button>
          </a>

          <a href = {d.github} >
            <button className='XLR'> Github </button>
          </a>
      </div>
  </div> 
        ))}
      </div>
    
    
    </div>
  )
}

















