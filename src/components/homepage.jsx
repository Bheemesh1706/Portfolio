import React ,{Suspense} from 'react';
import styled from 'styled-components';
import Git from '../styles/assests/git.svg';
import { Canvas } from '@react-three/fiber';
import Box from './Three/Box';
import { OrbitControls  } from '@react-three/drei';
import Bb8 from '../components/Three/Bb8';
import Bb8Animated from '../components/Three/Bb8_animated';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Divider
} from '@chakra-ui/react';

import Skills from './skills';
import { Link } from "react-router-dom";
import Projects from "./projects";

function Homepage() {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent >
          <ModalHeader><Text>Contact Details</Text></ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Text>Phone Number: +919677195987</Text>
              <Divider orientation='horizontal' />
              <Text>Email Adddress: bheemeshbala.71@gmail.com</Text>
              <Divider orientation='horizontal' />
               <Text>Linkdln:</Text>
               <a href='https://www.linkedin.com/in/bheemesh' target="_blank"><Text>www.linkedin.com/in/bheemesh</Text></a>
          </ModalBody>
        </ModalContent>
      </Modal>
      <HeaderNav>
            <NameCard >Bheemesh Balamurugan</NameCard>
            <Nav>
                <a href='#about'><LiTag>About</LiTag></a>
                <a href='#skills'><LiTag>Skills</LiTag></a>
                <a href='#projects'><LiTag>Projects</LiTag></a>
            </Nav>
      </HeaderNav>
      <HeroSection id="about">
        <AboutMeSection>
            <TextContainer>
                <Text size={"100px"} position={"absolute"} top={"50px"}>Let me</Text>
                <Text size={"30px"} position={"absolute"} top={"160px"} left={"25px"}>Design Your Internet Bubble</Text>
            </TextContainer>
            <ButtonContainer>
                <ContactButton onClick={onOpen}>
                Connect
                </ContactButton>
                <a  href="/Bheemesh_Resume.pdf"target="_blank">
                  <ContactButton >
                  Resume 
                  </ContactButton>
                </a>
            </ButtonContainer>
            <AboutMeFooter>
                 <Text size={"15px"} >GitHub Repository:</Text>
                  <a  href="https://github.com/Bheemesh1706" target="_blank">
                  <Img src={Git}></Img>
                  </a>
            </AboutMeFooter>
        </AboutMeSection>
        <ImageSection>
            <Canvas className='canvas'> {/*The 3d canvas the threes js object */}
              <OrbitControls enableZoom={false}/>  {/* Enables minimal 3d controls */}
              <ambientLight intensity={0.5}/>  {/*Adds light to te object*/}
              <directionalLight position={[2,5,2]} intensity={1}/> 
              <Suspense fallback={null}>
                    <Bb8/>  {/* Custom threejs component */}
              </Suspense>
            </Canvas>
        </ImageSection>
      </HeroSection>
      <Skills></Skills>
      <Projects></Projects>
    </Container>
  )
}

const Container = styled.div`
    height: 300vh;
    width:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

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
    background-color: #F3944C;
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

const LiTag = styled.li`
   font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
   font-size: 20px;
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
      background-color: #F3944C;
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
    margin-bottom: 10px;
`;

const AboutMeSection = styled.section`
    height: 90%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin-top: 50px;
`;

export const AboutMeFooter = styled.section`
   height:30%;
   width: 100%;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   padding-left: ${(p) => {
    return p.paddingLeft? p.paddingLeft:"10px";
  }};
`;

const ContactButton = styled.button`
      height: 54px;
      width: 150px;
      font-size: 20px;
      font-weight: 500;
      background: #F3944C;
      color: #fff;
      border: none;
      border-radius: 16px;
      transition: 0.2s;
      margin-left: 5px;
      margin-right: 15px;
      &:hover{
          box-shadow: 0px 0px 0px 3px #F3944C;
      }
`;

const ButtonContainer = styled.section`
`;

export const TextContainer = styled.section`
   height: 40%;
   width: 100%;
   position: relative;
   display: flex;
   flex-direction: column;
`;

export const Text = styled.p`
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

export const Img = styled.img`
  height: 40px;
  margin-left: 10px;
`;

const ImageSection = styled.section`
    height: 100%;
    width: 50%;
`;
export default Homepage