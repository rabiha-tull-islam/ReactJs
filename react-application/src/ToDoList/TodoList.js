import styled from 'styled-components';
import Header from './Header';
import React,{useState} from 'react';
import TodoItems from './TodoItems';
const TodoList=()=>{
    const[ inputItem, setinputItem]=useState("");
    const[listitem, setlistitem]=useState([]);
     const onclickHandler=()=>{
         if(inputItem ==="")
         {
            alert('Empty')
         }
         else{
            setlistitem([...listitem,inputItem])
         }
        
        setinputItem('')
     }
     const deteleItem=(id)=>{
         console.log('delee' ,id);
         const filteritems=listitem.filter((item,i)=> id !=i);
         setlistitem(filteritems);


     }
     const deleteList=()=>
     {
        const ans= prompt("Do you really Want to Delete aLL tasks",'Yes')
        if(listitem==[])
        {
            alert("Already Empty")
        }
         if(ans ==='Yes')
         {
            setlistitem([])
         }
         

       
        

     }

return(
    <div className='container text-center'>
       <Box>
         <Header/>
         
         <Input type='text' value={inputItem} placeholder="Enter Task to do" className="text-center text-light" onChange={(e)=>setinputItem(e.target.value)}/>
         <Button onClick={onclickHandler}>+</Button>
         <Button onClick={deleteList}>-</Button>
         <TodoItems listitem={listitem} deteleItem={deteleItem}/>
             
       </Box>
        
    </div>
)
}
export default TodoList;
const Box=styled.div`
margin: 12px auto;
 width:50%;
 border:1px solid black;
 height:500px;
 background:#03051f;
`;
const Input=styled.input`
margin-top:17vh;
padding: 4px;
margin-right:4px;
size:16vw;
width: 16vw;
outline:none;
background:#03051f;
border:none;
border-bottom:1px solid white

`
const Button=styled.button`

padding: 4px 15px;
margin-right:4px;
border-radius: 1%;
color: #03051f;
background:#663927;
font-weight:160px;
border:none;
&:hover{
    color: beige;
    Background: #063d39;
}
`
