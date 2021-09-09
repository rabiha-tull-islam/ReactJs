import React, { Component } from 'react'
import "./style.css"
import Show from './Show'
import { number } from 'prop-types'
// import { Show } from './Show'
export class Increment extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lock: true,
            number: 0,
            color: true,
            ThemeChanger:(this.color? "Light_calculator ":"Dark_calculator"),
            ThemeChange1:(this.color? "show_screen":"show_screenDark")
            
           
           
        }
        
        this.increament.bind(this)
        
    
        }
     
        
        increament(e){
            if(this.state.lock )
            e.setState({number: e.state.number+1})
            else 
            {
                alert("Screen Locked")
            }
        } 
        deletee=()=>{
            if( this.state.lock && this.state.number<=0)
            {
                console.log("number is 0");
            }
            else if(this.state.lock)
            {
                this.setState({number: this.state.number-1})
            }
            else
            {
                alert("Screen Locked")
            }
            

        }
        reset=()=>{
            if( this.state.lock && this.state.number===0)
            {
               alert("number is already Zero");
            }
            else if(this.state.lock)
            {
                this.setState({number: this.state.number=0})
            }
            else
            {
                alert("Screen Locked")
            }


        }
       

// ()=>this.setState({number:this.state.number+1})
render(){
    return(
        <div className="container">
            <div className={this.state.ThemeChanger}>
            <div className={this.state.ThemeChange1} > 
                <Show number={this.state.number} />
            </div>
            <div  className='btns'>
                 <div>
                     <button className="delete" onClick={ this.deletee} >Delete</button>
                 </div>
                 <div>
                     <button className="reset" onClick={this.reset} >Reset</button>
                 </div>
                 <div>
                     <button className="lock" onClick={()=>this.setState({lock: this.state.lock=!this.state.lock})}>Lock</button>
                 </div>
                 <div>
                     <button className="theme" onClick={this.state.lock? ()=>this.setState({color:this.state.color=!this.state.color}):''} >Theme</button>
                 </div>
             </div>
                
              

            </div>
            <div className="outcircle">
                    <button className="increment_btn incircle" onClick={()=>this.increament(this)}> Increment</button>
                  
              </div> 
            

        </div>
    )
}
}