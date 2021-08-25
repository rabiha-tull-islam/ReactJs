import React from 'react';
import '../App.css';
import items from './data.js';


 const Card=()=>{
        const detail="Created by Rabiha"
     return(
         
            <div > 
            <div className="row p-2   bg-success " >
                    <div className="col-12">
                       <h4 className= 'text-light text-center'>Gallery Images</h4> 
                     </div>
            </div>
           <div className='row d-flex justify-content-center' >
                  {items.map((item,i)=><div className='col-lg-2 col-md-4 col-sm-5 pt-3 mt-2  mb-5 d-flex justify-content-center' >
                        <div key={i} style={style}>
                           <div className="card" >
                            
                           <h5 className="card-title text-center text-info p-2">Id # {item.id} </h5>
                              <img src={item.image} className="card-img-top img-fluid " alt="..." style={style1}/>
                            <div className="card-body">
                            <span class="badge bg-light text-dark text-center">{item.name}</span>
                              {/* <a href="#" className="btn btn-outline-primary "></a> */}
                              <h5 className="card-title text-danger text-center p-1">Age : {item.age} </h5>
                              <button type="button" class="btn btn-primary position-relative opacity-75">
                              @{detail}
                               
                           
                             </button>
                              <p className="card-text text-secondary center pt-2 " ><i></i></p>
                            </div>
                          </div>
                       </div>
                     </div>
                          )}
           
         </div>
       </div>
          

         
     )

};

export default Card;
const style={ "width": "16rem",
"box-shadow":"2px 2px 5px  grey",
"border-radius":"10px" 


}
const style1={ "width": "16rem", 
"height": "10rem",

}
