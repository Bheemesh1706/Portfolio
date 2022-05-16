import React from 'react';
import styled from 'styled-components';
import '../styles/Homepage.module.css';
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
      <HeroSection></HeroSection>
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
`
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
    background-color: pink;
`
export default Homepage