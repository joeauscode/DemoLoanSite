import styled from "styled-components";



export const Aboutus = styled.main`
font-family: var(--font-family);
.main-about{
    background-color: #203458;
    padding: 50px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    color: var( --smoke-color);
   
}
.main-about h1{
    margin-top: 5rem;
     font-size: 50px;
    
}

.main-about p{
    width: fit-content;
    margin: auto;
    text-align: center;
}

.about-body{
background-color: var(--background-color2);
}
.about-body div{
    width: 90%;
    margin: auto;
    
}


.ourstory {
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 60px 0px;
  font-size: var(--font-size5);
}

/* Shared column base */
.ourstory > div {
  width: 50%;
  min-width: 0; /* critical for text wrapping */
}

/* TEXT COLUMN */
.ourstory > div:first-child {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.ourstory span {
  color: var(--background-color);
  font-weight: 700;
  letter-spacing: 2px;
  font-size: 14px;
}

.ourstory h1 {
  font-size: 2.3rem;
  font-weight: 800;
  margin: 0;
  line-height: 1.2;
}

.ourstory p {
  line-height: 1.7;
  font-size: 1rem;
  color: #555;
}
.ourstory > div:nth-child(2){
    padding: 10px;
}
/* IMAGE COLUMN */
.ourstory > div:nth-child(2) img {
  width: 100%;
  height: auto;
  border-radius: 15px;
  object-fit: cover;
  display: block;
 
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
}




.ourmission{
    display: flex;
    justify-content: space-between;
    gap: 10px;
    padding: 10px 0px;
}

.ourmission div{
    padding: 20px 20px;
    background-color: white;
    font-size: var( --font-size4);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    flex-direction: column;
    border-radius: 10px;
}

.ourmission div:nth-child(1) span{
      color: var( --smoke-color);
    background-color: var(--background-color);
    padding: 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size2);
    border-radius: 8px;
}
.ourmission div:nth-child(2) span{
    color: var( --smoke-color);
    background-color: var(--background-color1);
    padding: 15px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: var(--font-size2);
    border-radius: 8px;
}



.ourcore{
    padding: 30px 0px;
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    font-family: var(--font-family);
   
}


.header{
    width: 100%;
    margin: auto;
    text-align: center;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
} 

.header span{
  color: var( --background-color);
  font-size: var(--font-size4);
  font-weight: 900;
}

.header h1{
  font-size: 30px;
}
.header p{
  font-size: var( --font-size3);
  opacity: .7;
}
.boxsecure{
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    width: 90%;
    margin: 2rem auto;
    padding: 20px 0px;
}

.boxsecure div{
  padding:  10px 10px;
  display: flex ;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  gap: 15px;
}

.firsticon{
  background-color: var(--background-color);
  color: var(--smoke-color);
  padding: 15px 15px;
  border-radius: 10px;
  font-size: var( --font-size1);

}
.firsticon svg{
color: white;
display: block;
}
.secondicon{
  
  background-color:#cff0e8;
  color: var(--smoke-color);
  padding: 15px 15px;
  border-radius: 10px;
  font-size: var( --font-size1);

}

.secondicon svg{
color: green;
display: block;
}
.thirdicon{
  
  background-color:#ece5fe;
  color: var(--smoke-color);
  padding: 15px 15px;
  border-radius: 10px;
  font-size: var( --font-size1);

}

.thirdicon svg{
color: #8b5cf6;
display: block;
}
.Forticon{
  
  background-color:#d3d8e0;
  color: var(--smoke-color);
  padding: 15px 15px;
  border-radius: 10px;
  font-size: var( --font-size1);

}

.Forticon svg{
color: #1a2b4a;
display: block;
}




.Impact{
background-color: #253c65;
color: white;
text-align: center;
padding: 50px 20px;
}


.boxexhere{
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  margin-top: 4rem;

}

.boxexhere h1{
  color: var(--background-color);
  font-size: 55px;
}


.mainleader{
  width: 90%;
  text-align: center;
  margin: auto;
  padding: 50px 0px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}


.leaders{
  display: flex;
  width: 90%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  text-align: center;
  padding: 20px 0px;
}

.leaders div {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  border: 1px solid lightgray;
  border-radius: 10px;
}

.leaders div img{
  width: 100%;
  /* border: 1px solid lightgray; */
  height: 350px;
 border-top-right-radius: 10px;
 border-top-left-radius: 10px;
}

.span{
  color: var(  --background-color);
  font-weight: 900;
}

.ready{
  background-color: #f8f6f3;
}
.read-main{
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 0px;
  text-align: center;
}


.btns{
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.btns button{
  padding: 15px 40px;
  font-size: var(--font-size1);
  cursor: pointer;
  border: none;
  color: var( --smoke-color);
  border-radius: 10px;
}

.btns button:nth-child(1){
  background-color: var( --background-color);
}
.btns button:nth-child(2){
  background-color: var( --background-color1);
}


@media (max-width: 1000px) {
  .main-about {
    padding: 30px 15px;
  }

  .main-about h1 {
    margin-top: 2rem;
    font-size: 34px;
  }

  .main-about p {
    width: 100%;
    padding: 0 10px;
    text-align: center;
  }
}





@media (max-width: 1000px) {
  .ourmission {
    flex-direction: column;
    gap: 20px;
  }

  .ourmission div {
    width: 100%;
  }
}





/* MOBILE RESPONSIVENESS */
@media (max-width: 1000px) {
  .ourstory {
    flex-direction: column;
    padding: 40px 5%;
    gap: 25px;
  }

  .ourstory > div {
    width: 100%;
  }

  .ourstory h1 {
    font-size: 1.8rem;
  }
}




@media (max-width: 1000px) {

  /* OUR CORE SECTION */
  .ourcore {
    width: 100%;
    padding: 20px 10px;
  }

  .header h1 {
    font-size: 24px;
  }

  .header span {
    font-size: var(--font-size3);
  }

  .header p {
    font-size: var(--font-size4);
  }

  .boxsecure {
    flex-direction: column;
    gap: 15px;
    padding: 10px 0;
  }

  .boxsecure div {
    width: 100%;
    padding: 15px;
  }

  /* IMPACT SECTION */
  .Impact {
    padding: 30px 10px;
  }

  /* BOXEXHERE */
  .boxexhere {
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
  }

  .boxexhere h1 {
    font-size: 40px;
  }

  /* LEADERS SECTION */
  .leaders {
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding: 10px 0;
  }

  .leaders div img {
    height: auto;
    max-width: 100%;
  }

  /* READY SECTION */
  .read-main {
    padding: 30px 10px;
  }

  /* BUTTONS */
  .btns {
    flex-direction: column;
    gap: 15px;
  }

  .btns button {
    width: 100%;
    font-size: var(--font-size2);
    padding: 12px 20px;
  }
}






`