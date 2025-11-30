import styled from "styled-components";


export const Stafflog = styled.main`
background-color: white;
font-family: var(--font-family);


.main-stff{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;
}

.firstdiv, .secondiv{
 border: 1px solid;
 width: 100%;
 padding: 20px 20px;
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
}
.Secure{
font-weight: 100;
font-size: var(--font-size5);
}


`