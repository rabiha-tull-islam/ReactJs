import React,{useState} from 'react';
import './Accordion.css';
import Data from './Data';
// import AccorionItems from './AccordionItems';
const Accordion=()=>{
    let i=null
    const [show,setshow]=useState(i)
    const contentData=Data.map((Data,i)=>Data.Answer)
    // console.log(contentData)
    const content= new Set(contentData);
    // console.log(content);
    const contentArray = [...content];
    const contentString= contentArray.toString();
    const contentSlice = contentString.slice(0,199)
    // console.log(contentSlice)
    const [readmore, setreadmore]=useState(true)
    const setContent= readmore? contentSlice:contentString;
    const toggle=(tog)=>{
       
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
                      <span className="toggle" onClick={()=>toggle(i)}>{show===i? <i className="fas fa-chevron-down"></i>:<i className="fas fa-chevron-right"></i>}</span>
                  </div>
                   <div className={show===i? 'contentShow ':'content '}>
                    {setContent}.....<a href="#" className={show===i ? 'ashow':'ahidden'}  onClick={()=>setreadmore(!readmore)}>{readmore? 'Read more': 'Read less'}</a>
                   </div>
    </div>
       )}
            </div>
        </div>
    )

}
export default Accordion;
