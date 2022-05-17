import React from 'react';
import styled from 'styled-components';
import '../styles/Homepage.module.css';
import Git from '../styles/assests/git.svg'
function Homepage() {
  return (
    <Container>
      <HeaderNav>
            <NameCard >Bheemesh Balamurugan</NameCard>
            <Nav>
                <Link>About</Link>
                <Link>Skills</Link>
                <Link>Portfolio</Link>
            </Nav>
            <NameCard></NameCard>
      </HeaderNav>
      <HeroSection>
        <AboutMeSection>
            <TextContainer>
                <Text size={"100px"} position={"absolute"} top={"50px"}>Let me</Text>
                <Text size={"30px"} position={"absolute"} top={"145px"} left={"25px"}>Design Your Internet Bubble</Text>
            </TextContainer>
            <AboutMeFooter>
                 <Text size={"15px"} >Check Out My:</Text>
                 <Img src={Git}></Img>
            </AboutMeFooter>
        </AboutMeSection>
        <ImageSection></ImageSection>
      </HeroSection>
    </Container>
  )
}

const Container = styled.div`
    height: 100vh;
    width:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;

const HeaderNav = styled.section`
    height: 15%;
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NameCard = styled.p`
   text-decoration: none;
   font-family: Helvetica, sans-serif;
   font-weight: 700;
   font-size: 20px;
   cursor: pointer;
   position: relative;
   z-index: 1;

   &::before{
    content: '';
    background-color: hsla(61.7, 89.1%, 46.7%, 0.48);
    position: absolute;
    left: 0;
    z-index: -1;
    bottom: 3px;
    width: 100%;
    height: 8px;
    transition: all .3s ease-in-out;
   }

   &:hover{
      &::before{
        height: 100%;
      }
    }
  
   
`;

const Nav = styled.nav`
   height: 50%;
   width: 50%;
   display: flex;
   justify-content: space-evenly;
   align-items: center;
`;

const Link = styled.li`
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-size: 15px;
   list-style-type: none;
   font-weight: 500;
   cursor: pointer;
   position: relative;
   &::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 4px;
      border-radius: 4px;
      background-color: hsla(61.7, 89.1%, 46.7%, 0.48);
      bottom: 0;
      left: 0;
      transform-origin: right;
      transform: scaleX(0);
      transition: transform .3s ease-in-out;
   }

   &:hover::before {
      transform-origin: left;
      transform: scaleX(1); 
  }

`;

const HeroSection = styled.section`
    height: 85%;
    width: 80%;
    display:  flex;
`;

const AboutMeSection = styled.section`
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const AboutMeFooter = styled.section`
   height:30%;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding-left: 10px;
`;

const TextContainer = styled.section`
   height: 50%;
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
`;

const Text = styled.p`
    font-size:${(p) => {
    return p.size? p.size:"25px";
  }};
    color:${(p) => {
    return p.color? p.color:"black";
  }};
   position: ${(p) => {
    return p.position? p.position:"none";
  }};;
   margin: 0;
   top:${(p) => {
    return p.top && p.top;
  }};
   left:${(p) => {
    return p.left && p.left;
  }};
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

const Img = styled.img`
  height: 40px;
  margin-left: 10px;
`;

const ImageSection = styled.section`
    height: 100%;
    width: 50%;
    background-color: blue;
`;
export default Homepage