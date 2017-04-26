import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection.js'
import SectionTitle from '../Components/SectionTitle.js'


const Skills = () => (
  <HomeSection>
    <SectionTitle>
      Stack / Expertise
    </SectionTitle>
    <SkillList>
      <SkillItem>
        <SkillTitle>Javascript</SkillTitle>
        <SkillBullet>React.JS</SkillBullet>
        <SkillBullet>MobX / Redux</SkillBullet>
        <SkillBullet>Webpack</SkillBullet>
        <SkillBullet>ES6</SkillBullet>     
      </SkillItem>

      <SkillItem>
        <SkillTitle>CSS</SkillTitle>
        <SkillBullet>SASS</SkillBullet>
        <SkillBullet>CSS Modules</SkillBullet>
        <SkillBullet>Styled Components</SkillBullet>
      </SkillItem>

      <SkillItem>
        <SkillTitle>Web Design</SkillTitle>
        <SkillBullet>Responsiveness</SkillBullet>
        <SkillBullet>Mockups in Sketch</SkillBullet>
        <SkillBullet>UX importance</SkillBullet>
        <SkillBullet>Clean / modern style</SkillBullet>
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
`

const SkillTitle = styled.div`
  color: #6BB9F0;
  text-transform: uppercase;
  margin-bottom: 16px;
  letter-spacing: .8px;
  font-size: 18px;
  font-weight: 400;
`
const SkillBullet = styled.div`
  font-size: 18px;
  line-height: 2;
`



