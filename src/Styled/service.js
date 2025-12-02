import styled from "styled-components";




export const Services = styled.main`
font-family: var(--font-family);

.mainjects{
    background-color: var(--background-color2);
    width: 100%;
    padding: 10px 0px;
    font-family: var(--font-family);
}
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

.services{
    width: 90%;
    margin: 6rem auto;
    display: flex;
    justify-content: space-between;
    gap: 20px;
    align-items: center;
  
}

.writeupshere{
    flex: 1;
    width: 100%;
}

.imgs, .businessimage{
     flex: 1;
    width: 100%;
    border-radius: 10px;
    
}

img{
    width: 100%;
    border-radius: 10px;
    
}



.businessimage img {
    width: 100%;          
    max-width: 500px;    
    height: auto;         
    border-radius: 10px;  
    object-fit: contain;  
    display: block;       
    margin: 0 auto;       
}

.investmentloan{
    color: #8b5cf6;
            display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: var( --font-size1);
    background-color: #eee9f4;
    width: fit-content;
    padding: 5px 20px;
    border-radius: 20px;
}

.Businesslaodere{
        display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: var( --font-size1);
    background-color: #e2e3e4;
    width: fit-content;
    padding: 5px 20px;
    border-radius: 20px;
}


.Personal{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: var( --font-size1);
    background-color: #fff2f2;
    width: fit-content;
    padding: 5px 20px;
    border-radius: 20px;
}

.mortgageloan{
        display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 5px;
    font-size: var( --font-size1);
    background-color: #e7f8f4;
    width: fit-content;
    padding: 5px 20px;
    border-radius: 20px;
    color: #13b89a;
}

.mortgainicon{
    color: #13b89a;
}

.mortgageloan .CiWallet{
 padding: 10px 15px;
   display: flex;
   font-size: 25px;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   color: #13b89a;
   font-weight: 900;
}
.CiWallet{
   padding: 10px 15px;
   display: flex;
   font-size: 25px;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   color: var(--background-hover);
   font-weight: 900;
}

.CiWalletbusess{
      padding: 10px 15px;
   display: flex;
   font-size: 25px;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   font-weight: 900;
   color: var( --background-color1); 
}
.invesmntloadnhere{
      padding: 10px 15px;
   display: flex;
   font-size: 25px;
   justify-content: center;
   align-items: center;
   border-radius: 10px;
   font-weight: 900;
   color: #8b5cf6;
}

.myiconshere svg{
  display: block;
    color: var(--background-hover);
}
.mybusiness svg{
  display: block;
    color: var(--background-color1);
}
.investmeloanshere svg{
  display: block;
    color: #8b5cf6;
}



.personalloan{
    display: flex ;
    flex-direction: column;
    gap: 5px;
    padding: 10px 0px;
}

.personalloan h1{
    font-weight: 900;
    font-size: 40px;
}



.FaCheckDouble{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
    margin-block: 1.5rem;
}


.thewriteup{
    display: flex;
    flex-direction: column;
}

.Perfect-main{
    padding: 15px 35px;
    border-radius: 20px;
    background-color: var(--background-color2);
}

.perfect{
   gap: 30px;
    display: flex;
}

.Perfect-main p{
    margin-block: 10px;
}

.perfect div span{
    display: flex;
    align-items: center;
    gap: 10px;
    margin-block: 10px;
}

button{
    padding: 15px;
    width: 100%;
    border: none;
    cursor: pointer;
    background-color: var(--background-color);
    font-size: var(--font-size2);
    border-radius: 10px;
    color: var( --smoke-color);
    margin-block: 10px;
}

.ComparE{
    width: 90%;
    margin: 3rem auto;
  
}

.ComparE h1, h4{
    text-align: center;
    font-family: var(--font-family);
}

.tables {
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 100%;
  margin: 0 auto;
  font-family: var( --font-family);
  padding: 20px 0px;
}

.tables > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 12px;
  border-bottom: 1px solid #ddd;
}

.text{
    text-align: center;
}

.tables > div:first-child {
  font-weight: bold;
  color: white;
  background: var(--background-color1);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

}

.tables p,
.tables span {
  margin: 0;
  flex: 1; 
  text-align: center;
}

.tables div p {
  text-align: left; 
}


.ready{
    background-color: var(--background-color);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 60px 0px;
    gap: 10px;
   
}

.ready div button{
    background-color: var(--background-color2);
    color: var(--background-color);
    padding: 15px 30px;
}




@media (max-width: 850px) {

  /* General container adjustments */
  .services, .perfect, .personalloan, .ComparE {
    flex-direction: column;
    gap: 20px;
  }

  .writeupshere, .imgs, .businessimage {
    width: 100%;
  }

  .businessimage img {
    max-width: 100%;
    height: auto;
  }

  /* Comparison table adjustments */
  .tables > div {
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 6px;
  }

  .tables p,
  .tables span {
    text-align: left;
    margin: 4px 0;
    flex: unset;
  }

  .tables > div:first-child {
    text-align: center;
  }

  /* Services/loans badges adjustments */
  .investmentloan,
  .Businesslaodere,
  .Personal,
  .mortgageloan {
    width: 100%;
    justify-content: center;
  }

  /* Buttons full width */
  button {
    width: 100%;
  }

  .ready {
    padding: 40px 10px;
  }

  .ready div button {
    width: 100%;
  }

  /* Font adjustments */
  .main-contact h1 {
    font-size: 36px;
    margin-top: 3rem;
  }

  .personalloan h1 {
    font-size: 32px;
  }

}


`