import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection.js'
import mediaQuery from '../helpers/mediaQuery'

const Contact = () => (
  <ContactContainer id="contact">
    <Content>
      <Title>Let's build something great.</Title>
      <SubTitle>
        I'd love to design & build your next idea, 
        or help out with an existing project.
      </SubTitle>
      <a href="mailto:nicolemayobiz@gmail.com">
        <EmailButton >
          Send an email
        </EmailButton>
      </a>
    </Content>
  </ContactContainer>
)

export default Contact

const ContactContainer = styled(HomeSection)`
  background-color: #f5f5f5;
`
const Content = styled.div`
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 60px 80px;
  text-align: center;
  border-radius: 5px;
  ${mediaQuery.tablet`
    padding: 60px 20px;
  `}
`

const Title = styled.div`
  text-align: center;
  font-family: 'Lato', 'Avenir', Helvetica;
  font-weight: 200;
  letter-spacing: 1.4px;
  color: rgba(0,0,0,.5);
  font-size: 31px;
  margin-bottom: 18px;
  ${mediaQuery.mobile`
    line-height: 1.4;
    padding: 0 20px;
  `}
  ${mediaQuery.smallMobile`
    line-height: 1.3;
    padding: 0;
    font-size: 30px;
  `}
`

const SubTitle = styled.div`
  text-align: center;
  font-weight: 200;
  color: black;
  letter-spacing: .5px;
  line-height: 1.6;
  ${mediaQuery.mobile`
    font-size: 17px;
    padding: 8px;
  `}
  ${mediaQuery.smallMobile` 
    font-size: 16.7px;
  `}
`

const EmailButton = styled.button`
  border: none;
  background-color: #6BB9F0;
  color: #fff;
  border-radius: 99rem;
  height: 38px;
  padding-left: 26px;
  padding-right: 26px;
  text-transform: uppercase;
  font-size: .86rem;
  font-weight: 100;
  letter-spacing: .13rem;
  vertical-align: top;
  overflow: hidden;
  display: inline-block;
  box-shadow: none;
  margin-top: 45px;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
  &:hover{
    filter: brightness(105%);
    cursor: pointer;
  }
  &:focus{
    outline: none;
  }
`