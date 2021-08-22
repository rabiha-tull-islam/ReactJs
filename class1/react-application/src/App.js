import React from 'react';
import logo1 from './images/1.jpg';
import logo2 from './images/2.jpg';
import logo3 from './images/3.jpg'
import logo4 from './images/4.jpg'
import {Card} from './component/card'

import './App.css';
function App() {
        //obj
        const hello={
            hel: "Sun is",
            wor: "setting down"
        }
        hello. greeding=" Salam"
        // array
    const item = [
        {
          title: 'Reactjs',
         name: 'rabiha',
        pic: logo1,
          points: 4,
          objectID: 0,
        },
        {
          title: 'React native',
         name: 'ayesha',
         pic: logo2,
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
        {
          title: 'ES6',
         name: 'bareera',
         pic: logo3,
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
        {
          title: 'React JSx',
         name: 'ALI Alyan',
         pic: logo4,
          num_comments: 2,
          points: 5,
          objectID: 1,
        },
      ];
      const age =21;
      const detail="Create by rabiha"
    return (
     
      <div> 
         <div className="row p-2  justify-content-evenly bg-danger " >
                 <div className="col-2 ">
                   <h4 className= 'text-light'>Gallery Images</h4> 
                   </div>
                 </div>
      
        {/* <Card/> */}
         <div className='row justify-content-evenly '>
               {item.map((x,i)=><div className='col-lg-2 col-md-6 pt-3 mt-2  mb-5' >
                      <div key={i} style={style}>
                        <div className="card" >
                           <img src={x.pic} className="card-img-top " alt="..." style={style1}/>
                         <div className="card-body">
                           <h5 className="card-title">{x.title} </h5>
                           <p className="card-text">card's content.</p>
                           <a href="#" className="btn btn-outline-danger">{x.name}</a>
                           <p className="card-text text-primary center pt-2 " >@{detail}</p>
                         </div>
                       </div>
                    </div>
               
        </div>
        )}
        
      </div>
    </div>
    );
  }
  export default App;
  const style={ "width": "13rem", 
  
 
  }
  const style1={ "width": "13rem", 
  "height": "10rem"
  }










// <div>
        // <div className='align'><img  src={logo} alt="logo"   /></div>
      //    <h1 className='center'> This is a Picture</h1>
      //     <pre className='center'> {hello.hel} {hello.wor}</pre>
      //        <h2>{hello.greeding} </h2>
      //        <b>My Age is {age}</b>

      //    {item.map((x)=><h2>points are  {x.points}</h2>)}
      // </div>
      