import React ,{useState}from 'react';
import styled from 'styled-components';
import { Text,AboutMeFooter,Img } from './homepage';
import { SkillText } from './skills';
import Git from '../styles/assests/git.svg';
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import "react-carousel-animated/dist/style.css";

function Projects() {

    const test = ["test1","test1","test1","test1","test1"];
    const [projects,setProjects] =useState([{name:"Tapper — A Portfolio for MetaMask Wallet",about:"It’s a Web3 Portfolio website for your Crypto and ERC-20 tokens",git:"https://github.com/Bheemesh1706/Tapper",technology:["Web3.js","Next.js","Typescript","Chakra-UI","Rapid-API","Git"]},
    {name:"A Custom Ecommerce",about:"It’s a FullStack MERN application with jwt authentication ,uses Context API for managing the state and hosted in netlify",git:"https://github.com/Bheemesh1706/E-Commerce-FrontEnd",technology:["Reactjs","Node","MongoDB","Context API", "Git"]},
    {name:"Alpha Blog — A Blogging Website",about:"It’s a Blogging WebApp written in Ror backed by sqlLite for database and hosted in heroku.",git:"https://github.com/Bheemesh1706/Alpha-Blog",technology:["Ruby", "Sqllite","Heroku","Ruby on Rails"]}]);


  return (
    <ProjectContainer  id="projects">
            <Title>Projects</Title>
            <Wrapper>
                
            <ReactCarousel
                carouselConfig={{
                    transform: {
                        rotateY: {
                            [BEFORE]: () => "rotateY(25deg)",
                            [CENTER]: () => "rotateY(0deg)",
                            [AFTER]: () => "rotateY(-25deg)",
                        },
                    },
                }}
                itemBackgroundStyle={{
                    backgroundColor: "#ece4db",
                    borderRadius: "3px",
                    boxShadow: "8px 12px 14px -6px black",
                }}
                containerBackgroundStyle={{
                    filter: "blur(7px)",
                    backgroundColor: "transparent",
                }}
                carouselHeight="500px"
            >
                {projects.map((data,index)=>( 
                <ProjectCard key={index}>
                        <ProjectCardHead>
                            <Text>{data.name}</Text>
                        </ProjectCardHead>
                        <ProjectCardBody>
                                <BodyLeft>
                                    <Text>About</Text>
                                    <Text size={"20px"}>{data.about}</Text>
                                    <AboutMeFooter paddingLeft={"25px"}>
                                        <Text size={"15px"} >Code Base:</Text>
                                        <a  href= {data.git} target="_blank">
                                                <Img src={Git}></Img>
                                        </a>
                                    </AboutMeFooter>
                                </BodyLeft>
                                <BodyRight>
                                    <Text>Technology</Text>
                                    <BodyRightWrapper>
                                        {
                                            data.technology.map((data)=>(<SkillText>
                                                {data}
                                            </SkillText>))
                                        }
                                    </BodyRightWrapper>
                                </BodyRight>
                        </ProjectCardBody>
                </ProjectCard>))}
            </ReactCarousel>;

               
            </Wrapper>
    </ProjectContainer>
  )
}

const ProjectContainer = styled.div`
  height:100%;
  width :100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  color: #000;
  position: relative;
  font-size: 5rem;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  z-index: 1;
  &::before {
  background: hsl(45 100% 70%);
  content: "";
  inset: 0;
  position: absolute;
  transform: scaleX(0);
  transition: transform 0.5s ease-in-out;
  z-index: -1;
}
  
  &:hover{
    &::before {
            transform: scaleX(1);
    }
}


`;
const Wrapper = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ProjectCard = styled.div`
  min-height: 70%;
  min-width: 430px;
  width: 100%;
  background-color: azure;
`;

const ProjectCardHead = styled.section`
  height:15%;
  width: 100%;
  border-top-right-radius: 1rem;
  border-top-left-radius:1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectCardBody = styled.section`
    height: 85%;
    width: 100%;
    border-bottom-left-radius: 1rem;;
    border-bottom-right-radius: 1rem;
    display: flex;
`;

const BodyLeft = styled.section`
    height: 100%;
    width: 60%;
    border-bottom-left-radius: 1rem;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BodyRight = styled.section`
    height:100%;
    width: 40%;
    border-bottom-right-radius: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const BodyRightWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

export default Projects