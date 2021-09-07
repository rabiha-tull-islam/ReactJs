import './Accordion.css';

const AccordionItems=({items,i})=>{
    return(
     <div  className="Item" key={i}>
        <div className="title">
            <div>
            <span>Quesition # {items.id}</span>   
            {items.Question}
            </div>
        
            <span className="toggle">+</span>
        </div>
        <div className="content">
            {items.Answer}
        </div>
    </div>
       
    )
}
export default AccordionItems;

