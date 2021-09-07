import React,{useState} from 'react';
import './Accordion.css';
import Data from './Data';
import AccorionItems from './AccordionItems';
const Accordion=()=>{
    let i=null
    const [show,setshow]=useState(i)
      console.log('jhgjh',i);
    const toggle=(i)=>{
        console.log('what is in i',i);
        if(show===i)
        {
            return setshow(null)
        }
        setshow(i);
    }
    return(
         <div className="Box">
            <div className="Accordion">
             {Data.map((items,i)=> <div  className="Item" key={i}>
                  <div className="title">
                      <div>
                          <span>Quesition # {items.id}</span>   
                          {items.Question}
                      </div>
                      <span className="toggle" onClick={()=>toggle(i)}>{show===i? '+':'-'}</span>
                  </div>
                   <div className={show===i? 'contentShow':'content'}>
                     {items.Answer}
                   </div>
    </div>
       )}
            </div>
        </div>
    )

}
export default Accordion;
