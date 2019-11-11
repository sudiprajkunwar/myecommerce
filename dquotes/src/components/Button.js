import styled from 'styled-components';

export const Button =styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border: 0.05rem solid var(--mainBlue);
border-color:${props => props.cart ? "var(--mainYellow)" :"var(--lightBlue)"};
color:${props=> props.cart?"var(--mainYellow)":"var(--mainBlue)"};
border-radius:0.5rem;
padding:0.2rem 0.5rem;
margin:0.2rem 0.5rem 0.2rem 0;
transition: .3s ease-out;
&:hover{
    background:${props => props.cart?"var(--mainYellow)":"var(--mainBlue)"};
    color:var(--mainWR);
}
&:focus{
    outline:none;
}
`