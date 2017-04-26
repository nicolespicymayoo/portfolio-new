import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection'
import mediaQuery from '../helpers/mediaQuery'

const Quote = () => (
  <HomeSection>
    <Content>
      <QuoteItem>
        <QuoteText>
          <div><span>“</span>The best design is the simplest one that works.<span>”</span></div>
        </QuoteText>
        <QuoteAuthor>Albert Einstein</QuoteAuthor>
      </QuoteItem>
      <QuoteDivider>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </QuoteDivider>
      <Text>We truly enjoy using new technologies to create beautiful websites. We strive to make the interwebz a more beautiful place, one site at a time.</Text>
    </Content>
  </HomeSection>
)

export default Quote

const Content = styled.div`
  max-width: 700px;
  text-align: center;
  margin: auto;
  ${mediaQuery.mobile`
      padding: 30px 0; 
  `}
`

const QuoteItem = styled.div`
  text-transform: uppercase;
  text-align: center;
`

const QuoteText = styled.div`
  span{
    dispay: inline-block
    color: #6BB9F0;
    font-size: 35px;
    font-family: Times New Roman !important;
    margin: 8px;
    vertical-align: center;
  }
  div{
    display: inline-block;
    vertical-align: center;
    font-size: 22px;
    letter-spacing: 1px;
    font-weight: 200;
  }
`

const QuoteAuthor = styled.div`
  color: #6BB9F0;
  display: block;
  text-align: right;
  font-size: 17px;
  font-weight: 200;
  margin-right: 3%;
  ${mediaQuery.mobile`
      padding-top: 5px; 
  `}
`

const Text = styled.div`
  display: block;
  text-align: center;
  font-weight: 200;
  margin: auto;
  letter-spacing: .5px;
  line-height: 1.8;
  font-size: 20px;
  max-width: 700px;
  ${mediaQuery.tablet`padding: 0 50px;`}
  ${mediaQuery.mobile`
    padding: 10px;
    font-size: 19px;
  `}
  ${mediaQuery.smallMobile`font-size: 17.3px;`}
  
`


const QuoteDivider = styled.div`
  text-align: center;
  margin: 60px 0;
  div{
    height: 3px;
    width: 3px;
    color: #6BB9F0;
    display: inline-block;
    padding: 5px;
    font-weight: bold;
  }
`