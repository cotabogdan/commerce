import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
position:relative;
overflow:hidden;
margin-top:10px;
`;

export const Wrapper =styled.div`
height:100%;
display:flex;
transform:translateX(${props=>props.slideIndex * -100}vw);
transition:all 1.5s ease;
`;

export const Slide = styled.div`
display:flex;
align-items:center;
width:100vw;
height:100vh;
background-color: #${props=>props.bg}
`;
export const ImgContainer = styled.div`
flex:1;
height:100%;
`;

export const Image=styled.img`
height:80%;
`;
export const  InfoContainer = styled.div`
flex:1;
padding:70px;
`;

export const Titile=styled.h1`
font-size:50px;
`;
export const Description=styled.p`
margin:50px 0px;
font-size:20px;
font-weight:500;
letter-spacing:3px;
`;
export const ButtonUI = styled.button`
padding:10px;
font-size:20px;
background-color:transparent;
cursor:pointer;
`;

export const Arrow = styled.div`
width:50px;
height:50px;
background-color:#c3cad9;
border-radius:50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top:0;
left:${props=>props.direction === "left" && "10px"};
right:${props=>props.direction === "right" && "10px"};
bottom:0;
cursor:pointer;
margin:auto;
opacity:0.5;
z-index:2;
`
