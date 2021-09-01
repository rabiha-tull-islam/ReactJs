import {useState} from 'react'
import React from 'react';
import Show from './Show'; 
import './style.css';



const Increment=()=>{
    const [number, setnumber] = useState(0);
    const [flag, setflag] = useState(true);
    const [color,setcolor]=useState(true);
    const ThemeChange=(color? "Light_calculator ":"Dark_calculator")
    const ThemeChange1=(color? "show_screen":"show_screenDark")
    const changeFlag=()=>{
         setflag(!flag);
      

    }
    const delet=()=>{
        if(flag && number === 0)
        {
            alert("number is : 0")
        }
        else if(flag){
            setnumber(number-1)
        }
        else{
            console.log('locked')
        }

    // flag && number>0 ?setnumber(number-1): alert("number is : 0")
        
    }
    const reset=()=>{

      if (flag  &&  number=== 0 )
      {
        alert("already Reset");
        
      }
      else if(flag)
      {
      setnumber(number-number)
      }
      else{
          console.log("locked")
      }
      
     
     // flag && number==0 ? alert("already Reset") : flag? setnumber(number-number) : '';
    }
    
    return(
        <div className="container" >
        <div className={ThemeChange}>
            <div  className={ThemeChange1}> 
                <Show number={number} />
            </div>
            <div  className='btns'>
                 <div>
                     <button className="delete" onClick={delet}>Delete</button>
                 </div>
                 <div>
                     <button className="lock" onClick={()=>setflag(!flag)}>Lock</button>
                 </div>
                 <div>
                     <button className="reset" onClick={reset}>Reset</button>
                 </div>
                 <div>
                     <button className="theme" onClick={flag?()=>setcolor(!color):''} >Theme</button>
                 </div>
                 
             </div>
             </div>
             
             <div className="outcircle">
                    <button className="increment_btn incircle" onClick={flag?()=>setnumber(number+1):''}> Increment</button>
                  
              </div> 
            

          

    </div>
    )

 
}

export default Increment;
