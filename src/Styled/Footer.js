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
    justify-content: space-between;
    align-items: center;
    gap: 4px;
    background-color: transparent;
    width: fit-content;
    border: 1px solid;
    border-radius: 10px;
}

.inputs input{
    width: 100%;
    padding: 10px;
    border: 1px solid lightgray;
    border: none;
    outline: none;
    background-color: transparent;
    border-radius: 8px;
    color: white;
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

.privacy{
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.privacy span{
    cursor: pointer;
}





@media (max-width: 850px) {
  .main-footer {
    flex-direction: column;
    gap: 30px;
    padding: 30px 15px;
    align-items: flex-start;
  }

  .homename {
    gap: 5px;
    font-size: 0.9rem;
  }

  .Empowering {
    font-size: 0.8rem;
  }

  .inputs {

    width: 100%;
    gap: 10px;
  }

  .inputs input {
    width: 100%;
  }

  .homesfirts {
    gap: 8px;
  }

  .socialmidia {
    flex-wrap: wrap;
    gap: 20px;
  }

  ul {
    font-size: 0.9rem;
    gap: 10px;
  }

  .reserved {
    flex-direction: column;
    gap: 10px;
    padding: 10px 0;
  }

  .privacy {
    flex-direction: column;
    gap: 5px;
  }

  .call, .message, .location {
    gap: 3px;
  }
}


`