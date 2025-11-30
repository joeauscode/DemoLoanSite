import styled from "styled-components";
import Backgound from '../assets/images/background.jpg'

export const Home = styled.main`
font-family: var(--font-family);
background-image: url(${Backgound});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
max-height: 100vh;



.main {

  background:
    linear-gradient(to right,rgba(56, 71, 98, 0.95) 0%,
    rgba(56, 71, 98, 0.8) 35%, 
     rgba(56, 71, 98, 0.5) 55%,
      rgba(56, 71, 98, 0.2) 70%,
      rgba(56, 71, 98, 0) 85%
    ),
    url("../assets/images/background.jpg");

  background-size: cover;
  background-position: center;
}


.section{
    width: 90%;
    margin: auto;
    padding: 7rem 0rem;
}

.trusted{
    display: flex;
    align-items: center;
    gap: 2px;
    border: 1px s;
     width: fit-content; 
    justify-content: start;
    background-color: #6078a0ff;
    border-radius: 20px;
    padding: 10px 10px;
    color: var(--smoke-color);
   
}

.trusted span:first-child svg {
  display: block; 
   display: block; 
 color: var(--background-color);
 font-size: var(--font-size2);           
}
.trusted span:nth-child(2){
    font-size: var( --font-size4);
}

.fast{
    width: fit-content;
    font-size: 30px;
    line-height: 60px;
    margin-top: 1rem;
    color: var( --smoke-color);
   
}

.Tailored{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    width: fit-content;
    
}

.Tailored p{
    font-size: var( --font-size1);
color: var( --smoke-color);
font-weight: 100;
}

.Tailored span{
  font-size: var( --font-size3);
color: var( --smoke-color);
opacity: .8;
}



.buttons{
    width: fit-content;
    justify-content: space-between;
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.buttons button{
    padding: 20px 20px;
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-weight: 100;
    font-size: var( --font-size1);
    border-radius: 10px;
    border: none;
}

button:nth-child(1){
    background-color: var(--background-color);
    color: var(--smoke-color);
}

button:nth-child(2){
border: 1px solid whitesmoke;
color: var(--smoke-color);
background-color: transparent;

}

button:nth-child(2):hover{
    background-color: var(--smoke-color);
    color: black;
}

button:nth-child(1):hover{
    background-color: var(--background-hover);
}


.nohiddenfess{
    margin-top: 2rem;
    display: flex;
    gap: 40px;
    color: var( --smoke-color);
    width: fit-content;
    font-size: var(--font-size4);
}

.nohiddenfess span{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

.nohiddenfess span svg{
    display: block;
    color: var(--background-color);
    font-size: var(--font-size4);
}


.ourservice{
    background-color: var( --background-color2);
}


.myservic{
    width: 90%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    padding: 40px 0px;
}

.myservic p:first-child{
    color:  var(--background-color);
    font-size: var( --font-size4);
    font-weight: 700;
}

.myservic p:nth-child(2){
  color: black;
  font-size: 35px;
  font-weight: 900;
}

.myservic span{
    font-size: var(--font-size3);
    opacity: .7;
}


.boxex{
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
    margin: auto;
    gap: 10px;
    padding: 20px;

}

.boxex div{
    border: 1px solid lightgray;
    background-color: white;
    padding: 15px 15px;
    font-size: var(--font-size4);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
    gap: 10px;
    border-radius: 10px;
}

.boxex div span:first-child{
    padding: 15px 15px;
    border-radius: 40px;
    display: flex;
    justify-content: center;
     font-size: 25px;
    align-items: center;
    color: var(--smoke-color);
    font-weight: 900;
}

.boxex div p{
    font-size: var(--font-size3);
    font-weight: 600;
}

a{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
    color: var( --background-color);
}
a svg{
    display: block;
}


.eligibility{
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
    padding: 30px 0px;
    align-items: center;
    
}

.imges{
 background-color: #ebe3fe;
border-radius: 10px;
}

.imges img{
    padding: 10px 10px;
    
}


.requirmnts{

    display: flex;
    flex-direction: column;
    gap: 15px;
}

.requirmnts p:nth-child(1){
        color:  var(--background-color);
    font-size: var( --font-size4);
    font-weight: 700;
}


.main-mark{
    display: flex;
    flex-direction: column;
    gap: 50px;
}
.markgood {
    display: flex;
    align-items: flex-start;   
    gap: 30px;
    
}

.markgood span:first-child {
    display: flex;
    align-items: flex-start;
}


.markgood span:first-child svg {
    font-size: 40px;
    color: #12b996;
    display: block;
}

.markgood div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.markgood div span:nth-child(1){
    font-weight: 600;
    font-size: var( --font-size3);
}
.markgood div span:nth-child(2){
    font-weight: 100;
    font-size: var( --font-size5);
}

.btn{
    padding: 20px 0px;
}
.btn button{
  padding: 20px 25px;
  border: none;
  border-radius: 10px;
  background-color: var(--background-color1);
  color: var( --smoke-color);
  cursor: pointer;
  font-size: var(--font-size3);
}

`