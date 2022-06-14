import styled from "styled-components";

export const ImgDivStyle = styled.div`
    background: linear-gradient(to left, rgba(0,0,0 ,0), rgba(0,0,0,1)), url(https://res.cloudinary.com/dbdrkxooj/image/upload/v1654330636/openhostal/5fd232928d7d248e9828e0d7_hoteles-de-s%C3%BAper-lujo-1024x683_c0qyd5.jpg);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    height: 50vh;
    margin: 0px 25px;
    border-radius: 20px;
`;
export const MainDivStyle = styled.div`
 background-color: #212529;
 color:white; 
`;

export const HDivStyle = styled.h2`
    padding:30px;
    padding-top: 40px;
    padding-left:45px;

`;
export const TitlesDivStyle = styled.div`
display: flex;
flex-direction:column;
width:350px;
`;
export const PDivStyle = styled.p`
    padding-left:50px;
`;
export const CarDivStyle = styled.div`
height: 20vh;
margin: 0px 45px;
border-radius: 15px;
background-color:#000000 ;
position: relative;
top:20px; 
display:flex;
flex-wrap: wrap;
`;

export const CarHStyle = styled.h6`
    padding:10px;
    padding-left:50px;
`;
export const CarthStyle = styled.th`
    padding:1vh;
    padding-left:3vw;
`;
export const CartabStyle = styled.table`
    text-align:center;
`;
export const IconCStyle = styled.tr`
    color:blue;
`;
export const IconIIStyle = styled.th`
    
`;
export const CardImgStyle = styled.div`
margin: 4px 4px;
    background: linear-gradient(to left, rgba(0,0,0 ,0), rgba(0,0,0,1)), url(https://res.cloudinary.com/dbdrkxooj/image/upload/v1654286831/openhostal/291189069_cbxgsr.jpg);
    background-repeat: no-repeat;
    width:60vw;
    background-position: center center;
    background-size: cover;   
    border-radius: 10px;
@media(max-width: 600px) {
    background:none;
    display:none;
}
`;
export const H1Style = styled.h1`
    text-align:center;
    margin-top:150px;
`;
export const H2Style = styled.h2`
    text-align:left;
    margin-top:10px;
    margin-left:30px;
`;

export const BootonStyle = styled.button`
padding: 0.8em 1.0em;
border: 2px solid blue;
position: relative;
overflow: hidden;
background-color: transparent;
text-align: center;
text-transform: uppercase;
font-size: 12px;
transition: .3s;
z-index: 1;
font-family: inherit;
color: white;
border-radius: 8px;
margin-left: 20px;
&::before {
    content: '';
 width: 0;
 height: 300%;
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%) rotate(45deg);
 background: blue;
 transition: .5s ease;
 display: block;
 z-index: -1;
  }
  &:hover::before {
    width: 105%;
   }
   
   &:hover {
    color: white;
   }
`;

export const FormLanStyle = styled.div`
    display:flex;
    align-items:center;
    height:100px;
    justify-content:center;
    @media(max-width: 600px) {
        flex-direction: column;
        margin: 0px 40px;}
        height:200px;
`;
export const BtnStyle = styled.button`
padding: 0.8em 2.5em;
position: relative;
background-color: blue;
text-align: center;
text-transform: uppercase;
font-size: 12px;
font-family: inherit;
color: white;
border:none;
border-radius: 5px;
height:40px;
margin-top:23px;
margin-left:20px;
`;

export const CardCateStyle = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
background: linear-gradient(#212529, black);
`;

export const CardFindStyle = styled.div`
display: flex;
flex-direction: row;
flex-Wrap: wrap;
background-color: black;
`;

export const CardImmStyle  = styled.div`
    margin:2px 2px;
    max-width: 200px;
    max-height: 400px;
    
`;

export const CardsStyle = styled.div`  
    display:flex;
    flex-direction:row;
    background-image: linear-gradient(to right,#212529,#212529,white);
    width: 430px;
    height: 330px;
    overflow: hidden;
    border-radius: 13px;
    margin: 20px;
    transition: all .5s;
        &:hover{
            margin-top: 5px; 
            background-image: linear-gradient(to right,#212529,#212529);
        }
`;
export const ImgIgStyle = styled.img` 
    width: 100%;
    height: auto;
    margin-left: 5px;
    border-radius: 10px 3px 3px 10px;
`;
