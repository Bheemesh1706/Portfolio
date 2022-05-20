import React ,{useState}from 'react';
import styled from 'styled-components';
import { Text, TextContainer } from './homepage';
import Card from 'react-animated-3d-card';
import { Title } from './projects';

function Skills() {

    const [skills,setSkills] = useState([{name:"Area of Expertise",skills:[
        {name:"Automation"},{name:"FullStack Development"},{name:"IOT"},{name:"Linux"},{name:"Networking"}
    ]},
    {name:"Languages",skills:[
        {name:"Ruby"},{name:"Python"},{name:"C/C++"},{name:"Javascript"},{name:"TypeScript"},{name:"HTML/CSS"},{name:"Bash"}
    ]},
    {name:"Frameworks/Libraries",skills:[
        {name:"React.js"},{name:"Node.js"},{name:"Flask"},{name:"Ruby On Rails"},{name:"Express.js"},{name:"Three.js"},{name:"Material-UI"},{name:"BootStrap"},{name:"Chakra-UI"},{name:"Chrome Extentions"}
    ]},
    {name:"Developer Tools",skills:[
        {name:"Git"},{name:"GCP API"},{name:"VS Code"},{name:"Heroku"},{name:"Netlify"},{name:"Postman"}
    ]}]);

  return (
    <SkillConatiner>
        <Title id="skills">Skills</Title>
        <Wrapper >
            {skills.map((skill,index)=>(<Card  style={{
        boxShadow: "8px 0px 14px  #ebebeb",
        cursor: 'pointer'
      }}>
                    <SkillHead>{skill.name}</SkillHead>
                    <SkillBody>{ skill.skills.map((data,index)=>(
                        <SkillText key={index}>{data.name}</SkillText>
                    ))
                    }</SkillBody>
                    </Card>))}
        </Wrapper>
    </SkillConatiner>
  )
}


const SkillConatiner = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 100px;
`;

export const Skill = styled.section`
   min-height: 25%;
   width: 35%;
   min-width: 233px;
   border-radius: 16px;
   background-color: #f7f7f7;
   display: flex;
   flex-direction: column;
   align-items: center;
   cursor: pointer;

`;

const Wrapper = styled.section`
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

export const SkillHead = styled.p`
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
    text-align: center;
    padding: 5px;
`;

export const SkillText = styled.p`
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    padding: 10px;
`;

export const SkillBody = styled.div`
      font-family: Helvetica, sans-serif;
      height: 80%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      padding: 25px;
`;

export default Skills