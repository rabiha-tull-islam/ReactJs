import React , {Component} from 'react';
import logo from '../';
export class Card extends Component{
    render(){
        return(
            <div className="row">
          <div className="card" style={style} className="col-4">
  <img src={logo} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
        )
    }
  
}
export default Card;
const style={ "width": "18rem", 
"height":"18rem"}