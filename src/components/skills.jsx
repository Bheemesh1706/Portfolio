import React ,{useState}from 'react';
import styled from 'styled-components';
import { Text, TextContainer } from './homepage';
function Skills() {

    const [skills,setSkills] = useState([{name:"Area of Expertise",skills:[
        {name:"Automation"},{name:"FullStack Development"},{name:"IOT"},{name:"Linux"},{name:"Networking"}
    ]},
    {name:"Languages",skills:[
        {name:"Ruby"},{name:"Python"},{name:"C/C++"},{name:"Javascript"},{name:"TypeScript"},{name:"HTML/CSS"},{name:"Bash"}
    ]},
    {name:"Frameworks",skills:[
        {name:"React.js"},{name:"Node.js"},{name:"Flask"},{name:"Ruby On Rails"},{name:"Express.js"},{name:"Material-UI"},{name:"BootStrap"},{name:"Chakra-UI"}
    ]},
    {name:"Developer Tools",skills:[
        {name:"Git"},{name:"GCP API"},{name:"VS Code"},{name:"Heroku"},{name:"Netlify"},{name:"Postman"}
    ]}]);
  return (
    <SkillConatiner>
        <Text>Skills</Text>
        <Wrapper>
            {skills.map((skill,index)=>(<Skill key={index}>
                    <SkillHead>{skill.name}</SkillHead>
                    <SkillBody>{ skill.skills.map((data,index)=>(
                        <Text key={index}>{data.name}</Text>
                    ))
                    }</SkillBody>
            </Skill>))}
        </Wrapper>
    </SkillConatiner>
  )
}


const SkillConatiner = styled.div`
    height: 100%;
    width: 100%;
    background-color:  hsla(61.7, 89.1%, 46.7%, 0.85);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Skill = styled.section`
   height: 25%;
   width: 35%;
   border-radius: 16px;
   background-color: white;
   display: flex;
   flex-direction: column;
   align-items: center;
`;

const Wrapper = styled.section`
  height: 90%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
`;

const SkillHead = styled.p`
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin-top: 10px;
`;

const SkillBody = styled.div`
      font-family: Helvetica, sans-serif;
      height: 80%;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
`;

export default Skills