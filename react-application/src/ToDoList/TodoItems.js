import styled from 'styled-components';
const TodoItems=({listitem,deteleItem})=>{
   
return(
        <div  className='container w-75'>
            {listitem.map((items,i)=><ToDoList key={i}> <Span>{i+1}.</Span>{items}<Button onClick={()=>deteleItem(i)}>-</Button></ToDoList>)}
        </div>
   
)
}
export default TodoItems;
const ToDoList=styled.h5`
font-family: cursive;
margin-top:15px;
border-bottom: 1px solid white;
color:beige;
`
const Button=styled.button`
float:right;
padding: 2px 15px;
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
const Span =styled.span`
float:left;`