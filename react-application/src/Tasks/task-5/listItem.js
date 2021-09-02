import Data from './newData';
import Card  from './card';
const List=()=>{
    return(
         <div className='row d-flex justify-content-center' >
            {Data.map((data,i)=><Card data={data} key={i} />)}
        </div>
        
    )
}
export default List;