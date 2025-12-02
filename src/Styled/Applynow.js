import styled from "styled-components";



export const Apply = styled.main`

font-family: var(--font-family);


.main-aply{
    background-color: #203458;
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    color: var( --smoke-color);
   
}
.main-aply h1{
    margin-top: 5rem;
     font-size: 50px;
    
}


.main-form{
    background-color: #f8f6f3;
    border: 1px solid #f8f6f3;
    
}

form{
    width:60%;
    margin: 2rem auto;
    background-color: white;
    box-shadow: 3px 3px 4px;
    border-radius: 20px;
    padding: 40px 40px;
}

.Loandetails{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    padding: 15px 0px;
}

.Loandetails span{
    background-color: var(--background-color);
    color: var( --smoke-color);
    padding: 10px 10px;
    border-radius: 10px;
}
.Loandetails p{
    font-size: var(--font-size1);
    font-weight: 600;
}

svg{
    display: block;
}

.inpuses{
    display: flex;
    flex-direction: column;
    gap: 10px;
padding: 20px 0px;
}

.Loanype{
   padding: 8px 0px;
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
}

.LoanType{

    width: 100%;
}

select{
    display: block;
    width: 100%;
    padding: 15px 12px;
    border-radius: 10px;
    border: 1px solid lightgray;
}

input{
    display: block;
    width: 100%;
    padding: 15px 12px;
    border-radius: 10px;
    border: 1px solid lightgray;
}


.Address{
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 15px 0px;
    gap: 10px;
}

.Address div{
    width: 100%;
    
}


.myinputclick{
    display: flex;
    justify-content: flex-start;
    width: 10%;
    gap: 10px;
}

.checkboxs{
    background-color: var( --background-color2);
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 10px;
    margin-block: 10px;
    border-radius: 10px;
}

.checkboxs p{
    width: 90%;
    padding: 10px;
    font-size: var( --font-size4);
}

button{
    width: 100%;
    border: none;
    padding: 16px 10px;
     border-radius: 10px;
     cursor: pointer;
     background-color: var(--background-color);
     color: var( --smoke-color);
     font-size: var(--font-size3);
     margin-top: 10px;
}

.needhelp{
    font-size: var(--font-size5);
    padding: 10px;
}
`