import React,{useState} from 'react';
import './Accordion.css';
import Data from './Data';
// import AccorionItems from './AccordionItems';
const Accordion=()=>{
    let i=null
    const [show,setshow]=useState(i)
    const [read, setread]=useState(false)
    //   console.log('jhgjh',i);
    const toggle=(tog)=>{
        // console.log('what is in i',i);
        if(show===tog)
        {
            return setshow(null)
        }
        setshow(tog);
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
                      <span className="toggle" onClick={()=>toggle(i)}>{show===i? <i class="fas fa-chevron-down"></i>:<i class="fas fa-chevron-right"></i>}</span>
                  </div>
                   <div className={show===i? 'contentShow':'content'}>
                     {items.Answer.slice(0,199)}<a href="#" class="card-link" onClick={()=>setread(!read)}>{read? 'Read Less': 'Read more'}</a>
                   </div>
    </div>
       )}
            </div>
        </div>
    )

}
export default Accordion;
