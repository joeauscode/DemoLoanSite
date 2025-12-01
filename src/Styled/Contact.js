import styled from "styled-components";





export const Contacts = styled.main`
font-family: var(--font-family);
.main-contact{
    background-color: #203458;
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    color: var( --smoke-color);
   
}
.main-contact h1{
    margin-top: 5rem;
     font-size: 50px;
    
}

.main-contact p{
    width: fit-content;
    margin: auto;
    text-align: center;
}

.contact-ushere{
    background-color: #f8f6f3;
}




.contsform{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
   padding: 30px 0px;
   gap: 30px;
}


.theboes{
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 30px 0px;
    width: 100%;

}


.iconss{
    font-size: 25px;
    padding: 15px 15px;
    background-color: var(--background-color);
    border-radius: 10px;
    color: var(--smoke-color);
}

.iconss svg{
    display: block;
}


.mylables{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
}

.mylables div{
    display: flex;
    flex-direction: column;
 
}

.socialmedia{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.socialmedia div{
    display: flex;
    justify-content: space-between;
}

.socialmedia div span{
    background-color: var(--background-color1);
    color: var( --smoke-color);
    padding: 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    cursor: pointer;
}

form{
background-color: white;
border-radius: 10px;
padding: 10px 30px;
width: 100%;
}

.headerform{
padding: 10px 0px;
font-size: var(--font-size5);
}

.inpus{
    margin-block: 1rem;
}
input{
    padding: 15px 10px;
    display: block;
    width: 100%;
    border-radius: 10px;
    border: 1px solid lightgray;
    outline: none;
}

input:hover{
    border: 1px solid var( --background-color);
}

.textrea{
    display: block;
    width: 100%;
    height: 100px;
    padding: 10px 10px;
    outline: none;
    border-radius: 10px;
}

.textrea:hover{
    border: 1px solid var( --background-color);
}

.inpus button{
    width: 100%;
    border: none;
    background-color: var(--background-color);
    padding: 15px 20px;
    border-radius: 10px;
    font-size: var(--font-size3);
    cursor: pointer;
    color: var( --smoke-color);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}






.fresquentquestions{
width: 90%;
margin: auto;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 50px 0px;
}

.ask{
    padding: 20px 0px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.ask div{
    display: flex;
    flex-direction: column;
    background-color: var(--background-color2);
    padding: 20px 20px;
    border-radius: 20px;
    gap: 10px;
  
}


`