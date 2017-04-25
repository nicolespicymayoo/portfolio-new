import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import Portfolio from './Portfolio'
import Services from './Services'
import Contact from './Contact'
import Skills from './Skills.js'

export default () => (
  <Home id="home">
    <Header/>
    <Portfolio/>
    <Skills/>
    <Services/>
    <Contact/>
  </Home>
)

const Home = styled.div`
  font-family: 'Lato', 'Avenir Next', 'San Francisco', '-apple-system', 'BlinkMacSystemFont', '\.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
`
