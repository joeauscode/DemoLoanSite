import styled from "styled-components";




export const Foot = styled.main`
background-color: #2c2c2c ;
width: 100%;
color: var(--smoke-color);
font-family: var( --font-family);

.main-footer{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 50px 0px;
}

.homename{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 7px;
    font-size: var( --font-size1);
}

.homename span:first-child{
    background-color: var( --background-color);
    padding: 8px 8px;
    border-radius: 10px;
    font-size: var( --font-size1);
}

.Empowering{
    font-size: var(--font-size5);
    padding: 10px;
    opacity: .7;
}

.homename span:first-child svg{
    display: block;
}
.inputs {
    display: flex;
    gap: 4px;
}
.inputs input{
    padding: 10px;
    border: 1px solid lightgray;
    background-color: transparent;
    border-radius: 8px;
}

.inputs button svg{
    display: block;
}

.inputs button{
    padding: 10px 15px;
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: var(--background-color);
    color: var(--smoke-color);
}

.homesfirts{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.socialmidia{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 40px;
    padding: 20px 0px;
    font-size: var(--font-size1);
}

ul{
    font-family: var( --font-family);
    display: flex;
    flex-direction: column;
    list-style-type: none;
    gap: 15px;
    font-size: var(--font-size5);
    color: var(--background-color2);
}

ul li:first-child{
    font-size: var(--font-size3);
    color: white;
}

li{
    cursor: pointer;
}

.call, .message, .location{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;
}
.call>svg{
 color: var( --background-color);
 font-size: var( --font-size3);
}
.message >svg{
   color: var( --background-color); 
   font-size: var( --font-size3); 
}
.location >svg{
    color: var( --background-color);
    font-size: var( --font-size3);
}


.lines{
    width: 90%;
    margin: auto;
    padding: 10px;
    /* border: 1px solid lightgray; */
}


.reserved{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-size: var(--font-size5);
}


`