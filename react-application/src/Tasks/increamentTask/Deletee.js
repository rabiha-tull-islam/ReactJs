
const Deletee=({number,setnumber,flag})=>{

    return(
        <div>
             if(flag && number == 0)
        {
            alert("number is : 0")
        }
        else if(flag){
            setnumber(number-1)
        }
        else{
            console.log('locked')
        }
        </div>
       

    )


// flag && number>0 ?setnumber(number-1): alert("number is : 0")
    
}
export default Deletee;