import styled from 'styled-components';
const Header=()=>{
    return(
        <Heading className='text-center text-light p-2 mt-2'>
            To Do List
        </Heading>
    )

}
export default Header;
const Heading=styled.h1`
font-family: "Colonna MT",Cursive, Fantasy;
background-color: red;
position: absolute;
right:27.5vw;
width: 45vw;
box-shadow: 2px 2px 10px red;
border-radius: 1vh;
`