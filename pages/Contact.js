import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection.js'
import SectionTitle from '../Components/SectionTitle.js'

const Contact = () => (
  <ContactContainer id="contact">
    <Title>Let's build something great.</Title>
    <SubTitle>
      I'd love to design & build your next idea, 
      or help out with an existing project.
    </SubTitle>
  </ContactContainer>
)

export default Contact

const ContactContainer = styled(HomeSection)`
  
`
const Title = styled(SectionTitle)`
  text-transform: none;
  letter-spacing: 1.5px;
  font-size: 30px;
  margin-bottom: 20px;
`

const SubTitle = styled.div`
  text-align: center;
  font-weight: 200;
  color: black;
  letter-spacing: .5px;
`