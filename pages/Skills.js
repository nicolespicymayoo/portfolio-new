import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection.js'
import SectionTitle from '../Components/SectionTitle.js'
import mediaQuery from '../helpers/mediaQuery'

const Skills = () => (
  <HomeSection id="skills">
    <SectionTitle>
      Stack / Expertise
    </SectionTitle>
    <SkillList>
      <SkillItem>
        <SkillTitle>Javascript</SkillTitle>
        <SkillBullet>React.JS</SkillBullet>
        <SkillBullet>Typescript</SkillBullet>
        <SkillBullet>REST APIs</SkillBullet>    
      </SkillItem>

      <SkillItem>
        <SkillTitle>CSS</SkillTitle>
        <SkillBullet>SASS</SkillBullet>
        <SkillBullet>CSS Modules</SkillBullet>
        <SkillBullet>Styled Components</SkillBullet>
      </SkillItem>

      <SkillItem>
        <SkillTitle>UI Design</SkillTitle>
        <SkillBullet>Responsiveness</SkillBullet>
        <SkillBullet>Sketch</SkillBullet>
        <SkillBullet>UX importance</SkillBullet>
      </SkillItem>
    </SkillList>
  </HomeSection>
)

export default Skills

const SkillList = styled.div`
  margin: auto;
  text-align: center;
`

const SkillItem = styled.div`
  display: inline-block;
  vertical-align: top;
  font-weight: 100;
  text-align: center;
  padding: 0 55px;
  margin: auto;
  ${mediaQuery.tablet`
      padding: 0 35px;
  `}
  ${mediaQuery.mobile`
      padding: 10px 30px 50px;
  `}
`

const SkillTitle = styled.div`
  color: #6BB9F0;
  text-transform: uppercase;
  margin: 15px 0px;
  letter-spacing: .8px;
  font-size: 19.2px;
  font-weight: 400;
`
const SkillBullet = styled.div`
  font-size: 17px;
  line-height: 2;
  letter-spacing:.4px;
`

const SkillBulletSmall = styled(SkillBullet)`
  font-size: 12px;
`



