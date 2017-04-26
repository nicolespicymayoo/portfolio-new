import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Portfolio from './Portfolio'
import Skills from './Skills.js'
import Services from './Services'
import Quote from './Quote'
import Contact from './Contact'


export default () => (
  <Home id="home">
    <Header/>
    <Portfolio/>
    <Skills/>
    <Services/>
    <Quote/>
    <Contact/>
  </Home>
)

const Home = styled.div`
  font-family: 'Lato', 'Avenir Next', 'San Francisco', '-apple-system', 'BlinkMacSystemFont', '\.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
`
