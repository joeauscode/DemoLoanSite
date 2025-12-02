import styled from "styled-components";




export const Calculat = styled.main`
padding: 40px 0px;
background-color: #f1f7ff;
font-family: var(--font-family);

.main-Calculate > h1, p{
    text-align: center;
    margin-bottom: 3rem;
}


.calculator{
    display: flex;
    width: 90%;
    margin: auto;
    justify-content: space-between;
    
}

.calculator div{

    width: 100%;
}

.calculator div:first-child{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 30px 30px;
    background-color: white;
    border-radius: 10px;
}

input{
    width: 100%;
}

.range{
    width: 100%;
        display: flex;
    justify-content: space-between;
    align-items: center;
}

.loanterm{
    display: flex;
    margin-top: 2.5rem;
    justify-content: space-between;
    align-items: center;
}

.rate{
    width: 100%;
       display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 7px;
    

}



.rate button{
    background: lightgray;
    border: none;
    color: black;

    padding: 10px 10px;
    width: 100%;
    border-radius: 10px;
}
small{
    font-size: var(--font-size5);
    padding: 10px;
}
.rate-real{
    display: flex;
    justify-content: space-between;
    padding: 7px;
    margin-top: 2.3rem;
}

select{
    width: 100%;
    padding: 10px 20px;
    outline: none;
    border: 1px solid  var( --background-color);
}




.total{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;  
  border-radius: 10px;
  padding: 30px 30px;
}

.totalain{
  background-color: #f1f7ff; 
  padding: 30px;
  border: 2px solid lightgray;
  display: flex;
  gap: 25px;
  flex-direction: column;
}

button{
    padding: 20px 20px;
    width: 100%;
    background-color: var( --background-color);
    border: none;
    border-radius: 10px;
    color: var(--smoke-color);
    font-size: var( --font-size2);
    cursor: pointer;
}



.Trustedd{
    background-color: var( --background-color1);
    
}

.main-truste{
padding: 30px 0px;
width: 90%;
margin: auto;
color: var( --smoke-color);
}

.topis{
    text-align: center;
    margin-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    font-family: var(--font-family);
}

.topis span:first-child{
    font-weight: 100;
    font-size: var( --font-size5);
    font-family: var(--font-family);
}
.topis h1{
font-weight: 900;
    font-size: 30px;
    font-family: var(--font-family);
}

.boxesss{
    display: flex;
    justify-content: space-around;
    gap: 20px;
}

.boxesss div{
    background-color: white;
    color: black;
    padding: 10px 20px;
    border-radius: 10px;
}

.sm{
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #12b996;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
}


.main-sm{
  display: flex;         
  align-items: center;   
  gap: 10px;              
}

.main-sm div{
  display: flex;
  flex-direction: column;
}

.main-sm div span:nth-child(2){
    font-weight: 100;
    font-size: var(--font-size5);
}

svg{
    color: var(  --background-color);
}

h4{
    font-size: var(--font-size4);
    font-weight: 200;
}

.main-sm p{
    display: flex;
    flex-direction: column;
}





@media (max-width: 1000px) {
  .calculator {
    flex-direction: column;
    gap: 20px;
    width: 95%;
    margin: auto;
  }

  .calculator div:first-child,
  .total {
    width: 100%;
    padding: 20px;
  }

  .range,
  .loanterm,
  .rate-real {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .rate {
    padding: 5px;
  }

  .rate button {
    width: 100%;
    padding: 8px 0;
  }

  select,
  input {
    width: 100%;
  }

  .totalain {
    padding: 20px;
    gap: 15px;
  }

  .boxesss {
    flex-direction: column;
    align-items: center;
  }

  .main-sm {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .main-sm div span:nth-child(2) {
    font-size: var(--font-size6); /* smaller for mobile */
  }

  .topis h1 {
    font-size: 24px;
  }

  .topis span:first-child {
    font-size: var(--font-size6);
  }
}

`