import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection.js'
import mediaQuery from '../helpers/mediaQuery'

const HeartIcon = (props) => (
  <svg {...props} viewBox="0 0 512 512" style={{ fill: "#6FC0FF", verticalAlign: "top", padding: "2px 2px" }}>
    <path d="M383.612,18.933c-4.169,0-8.39,0.188-12.543,0.563c-42.889,3.88-81.994,29.925-110.481,73.479
      c-33.048-48.743-87.674-80.042-140.218-80.042c-11.547,0-22.988,1.493-34,4.441c-34.03,9.109-61.776,34.443-76.116,69.517
			c-15.892,38.857-13.157,84.373,7.14,118.784c27.875,47.263,75.667,76.111,121.879,104.004
			c23.737,14.335,48.286,29.143,69.34,46.118c6.271,5.048,14.149,11.629,20.908,18.799c-8.528,8.404-25.39,36.338-25.552,36.673
			c-5.299,11.146-12.578,34.713-6.251,52.344c2.704,7.521,7.561,12.97,14.452,16.194c3.534,1.65,7.253,2.493,11.049,2.493
			c16.321,0,31.438-15.468,41.254-28.437c17.95-23.745,20.637-48.668,7.978-74.113c21.718-19.646,45.346-37.907,68.207-55.579
			c39.329-30.396,79.993-61.834,112.351-101.346c15.808-19.309,64.683-87.212,30.138-150.473
			C464.884,38.902,427.673,18.933,383.612,18.933z M242.248,427.458c-3.285,6.276-6.601,10.807-10.054,13.701
			c0.695-9.323,4.248-18.424,6.53-23.431c0.64-1.406,4.837-7.896,7.855-12.237C247.527,412.874,246.097,420.105,242.248,427.458z
			 M202.95,77.926c10.123,8.341,19.073,17.763,26.601,27.985c0.896,1.219,2.272,3.517,3.875,6.177
			c9.239,15.392,19.167,30.42,29.914,30.42c5.332,0,9.847-3.748,13.416-11.149c22.795-47.205,59.169-75.349,102.418-79.254
			c2.514-0.231,5.062-0.338,7.581-0.338c33.089,0,62.186,19.368,72.412,48.19c13.472,37.996-7.851,83.022-65.186,137.646
			c-24.618,23.46-51.923,44.554-78.323,64.958c-20.723,16.006-42.132,32.55-62.177,50.17
			c-18.027-19.981-41.672-36.719-60.438-49.175c-11.133-7.394-23.166-14.625-35.904-22.282
			c-62.626-37.638-133.599-80.298-122.41-159.73c6.396-45.417,40.2-74.763,86.12-74.763c3.374,0,6.827,0.16,10.27,0.492
			C156.37,49.675,181.878,60.564,202.95,77.926z"/>
  </svg>
)

const Contact = () => (
  <ContactContainer id="contact">
    <Content>
      <Title>Let's build something great.</Title>
      <SubTitle>
        I'd love to build your next idea, 
        or work for your awesome company.
      </SubTitle>
      <a href="mailto:nicolemayobiz@gmail.com">
        <EmailButton >
          Send an email
        </EmailButton>
      </a>
    </Content>
    <Footer>Coded with <HeartIcon height='14px' width='13px'/> by Nicole</Footer>
  </ContactContainer>
)

export default Contact

const ContactContainer = styled(HomeSection)`
  background-color: #fff;
  padding-bottom: 0;
`
const Content = styled.div`
  background-color: #fff;
  max-width: 600px;
  margin: auto;
  padding: 60px 80px 50px;
  text-align: center;
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
  font-size: .84rem;
  font-weight: 100;
  letter-spacing: .14rem;
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
  padding-bottom: 25px;
  padding-right: 30px;
  color: rgba(0,0,0,.5);
  font-weight: 200;
  letter-spacing: .56px;
  font-size: 13px;
  vertical-align: top;
`