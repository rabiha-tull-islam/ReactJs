import listItem from './listItem'
import Data from './newData';
const Card=({data})=>{
  console.log(data);
     return(
        <div  className='col-lg-2 col-md-4 col-sm-5 pt-3 mt-2  mb-5 d-flex justify-content-evenly'>
                 <div  style={style}>
                       <div className="card">
                           <h5 className="card-title text-center text-info p-2">Id #{data.id}</h5>
                          <img src={data.src} className="card-img-top img-fluid " alt="..." style={style1}/>
                        <div className="card-body">
                        <span class="badge bg-light text-dark text-center">{data.title}</span>
                          {/* <a href="#" className="btn btn-outline-primary "></a> */}
                          <h5 className="card-title text-danger text-center p-1">price : {data.price} </h5>
                          <button type="button" class="btn btn-primary position-relative opacity-75">
                          {data.content}
                           </button>
                          <p className="card-text text-secondary center pt-2 " ><i></i></p>
                        </div>
                      </div>
                   </div>
                 </div>
    );
}
export default Card;
const style={ "width": "16rem",
"boxShadow":"2px 2px 5px  grey",
"borderRadius":"10px" 


}
const style1={ "width": "16rem", 
"height": "10rem",

}