import styled from "styled-components";



export const Navbar = styled.main`
position: fixed;
width: 100%;
padding: 20px 0px;
font-family: var(--font-family);
  background: linear-gradient(to left,                  
    rgba(0, 0, 0, 0.9), 0%,       
    rgba(0, 0, 0, 0.5) 50%,        
    var(--background-color1) 100%  
  );

.main{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
}

.left{
   display: flex;
   gap: 6px;
   justify-content: center;
   align-items: center;
}
.left span:nth-child(1){
    background-color: var(--background-color);
    padding: 8px 10px;
    border-radius: 8px;
    font-size: var( --font-size2);
    color: var(--smoke-color);
}

.left span:first-child svg{
    display: block;
}

span{
    cursor: pointer;
    font-size: var( --font-size1);
    color: var(--smoke-color);
}

.right{
    display: flex;
   gap: 30px;
   justify-content: center;
   align-items: center;
   list-style-type: none;
}

li{
    cursor: pointer;
    font-size: var(--font-size3);
    color: var(--smoke-color);
    font-family: var(--font-family);
}
li:hover{
    color: var(--background-color);
}

button{
background-color: var(--background-color);
border: none;
border-radius: 8px;
padding: 8px 10px;
font-size: var(--font-size3);
color: var(--smoke-color);
cursor: pointer;
}

button:hover{
    background-color: var(--background-hover);
}


`