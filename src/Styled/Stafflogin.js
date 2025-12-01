import styled from "styled-components";


export const Stafflog = styled.main`
background-color: white;
font-family: var(--font-family);


.main-stff{
    width: 90%;
    margin: auto;
    display: flex;
    gap: 10px;
    justify-content: space-between;
    padding: 30px 0px;
}

.firstdiv{
 background-color: var( --background-color2);
 width: 100%;
 padding: 30px 30px;
 border-radius: 8px;
}

.secondiv{
    background-color: var(--background-color);
     width: 100%;
 padding: 30px 30px;
 border-radius: 8px;
 color: var( --smoke-color);
 display: flex;
 flex-direction: column;
 gap: 30px;
}



.firstdiv span:first-child{
 padding: 10px 15px;
 background-color: var(--background-color1);
 color: var( --smoke-color);
 border-radius: 10px;
 font-family: var(--font-family);
}

.firstdiv p{
    margin-top: 20px;
    font-family: var(--font-family);
    color: var( --background-color1);
    font-size: var( --font-size1);
    font-weight: 900;
}
.Secure{
font-weight: 100;
font-size: var(--font-size5);
}

form{
    margin-top: 10px;
}

div input{
    margin-block: 10px;
      padding: 14px 16px;
    width: 100%;
    border-radius: 8px;
    border: 1px solid lightgray;
    outline: none;
    border: 1px solid lightgray;
}

div input:hover{
    border: 1px solid var( --background-color);
}

form div button{
    padding: 14px 20px;
    font-size: var(--font-size1);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
}

form span{
    font-size: var( --font-size5);
    color: var(--background-hover);
}

.icons {
    display: flex;
    justify-content: space-between;
}
.icons span{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.myicon{
    background-color: #ff8d8d;
    padding: 10px 15px;
    width: fit-content;
    font-size: var( --smoke-color);
    border-radius: 10px;
    font-size: var( --font-size1);
}

.secondiv button{
    padding: 15px 10px;
    border: none;
    border-radius: 8px;
    font-family: var( --font-family);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-size: var(--font-size3);
    cursor: pointer;
}

`