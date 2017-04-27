import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection.js'
import mediaQuery from '../helpers/mediaQuery'

const HeartIcon = (props) => (
  <svg {...props} viewBox="0 0 512 512" style={{fill: "rgba(107,185,240, .6)"}}>
    <path d="M492.719,166.008c0-73.486-59.573-133.056-133.059-133.056c-47.985,0-89.891,25.484-113.302,63.569    c-23.408-38.085-65.332-63.569-113.316-63.569C59.556,32.952,0,92.522,0,166.008c0,40.009,17.729,75.803,45.671,100.178    l188.545,188.553c3.22,3.22,7.587,5.029,12.142,5.029c4.555,0,8.922-1.809,12.142-5.029l188.545-188.553    C474.988,241.811,492.719,206.017,492.719,166.008z"
    />
  </svg>
)

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
    <Footer>Made with <HeartIcon height='11px' width='11px'/> by Nicole</Footer>
  </ContactContainer>
)

export default Contact

const ContactContainer = styled(HomeSection)`
  background-color: #f5f5f5;
  padding-bottom:0;
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
  margin-bottom: 120px;
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
  letter-spacing: .6px;
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

const Footer = styled.div`
  text-align: right;
  padding-bottom: 10px;
  color: rgba(0,0,0,.4);
  font-weight: 200;
  letter-spacing: .5px;
  font-size: 13px;
`