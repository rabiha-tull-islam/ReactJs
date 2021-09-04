import {useState}from "react";
import './slider.css';
import Prev from "./Prev";
import first from '../images/book1.jpg';
import second from '../images/book2.jpg';
import third from '../images/book3.png';
import forth from '../images/book4.jpeg';



 const Slider=()=>{
    const prevs=()=>{
        (index===0)? setindex(3):setindex(index-1)
    }
    const nextt=()=>{
        index===3? setindex(0):setindex(index+1)

    }
    
    const arr=[first,second,third,forth];
    const [index, setindex] = useState(0);
     return(
        <div className="slider">
        <div className="img-box">
          <img src={arr[index]} alt="" id="slider-img" />
        </div>
        <button className="btn prevbtn" onClick={prevs}>Prev</button>
        <button className="btn nextbtn" onClick={nextt}>Next</button>
      </div>

     )
   

 }
 export default Slider