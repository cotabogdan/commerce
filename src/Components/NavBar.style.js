import styled from 'styled-components';


 export const Container = styled.div`
height:60px;


`;

export const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
;`

export const Left=styled.div`
flex:1;
display:flex;
align-items:center;
`;
export const Right=styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-end;
`;

export const MenuItem=styled.div`
font-size:14;
cursor:pointer;
margin-left:25px;
`
export const Center=styled.div`
flex:1;
text-align:center;
`;
export const Language =styled.span`
font-size:14px;
cursor:pointer
`;

export const SearchContaniner=styled.div`
border:1px solid gray;
display:flex;
align-items:center;
margin-left:25px;
padding:5px;
`;

export const Input =styled.input`
border:none;
`;

export const Logo=styled.h1`
font-weight:bold;
`
export const LogoStyle=styled.img`
display:flex;
align-items:center;
width:25%;
padding:3px;
justify-content:flex-end;
margin-left:10rem;
`