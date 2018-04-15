import React from 'react'
import styled from 'styled-components'
import Header from './Header'
import About from './About'
import Portfolio from './Portfolio'
import Skills from './Skills.js'
import Services from './Services'
import Contact from './Contact'


export default () => (
  <Home id="home">
    <Header/>
    <About/>
    <Portfolio/>
    <Skills/>
    <Services/>
    <Contact/>
  </Home>
)

const Home = styled.div`
  font-family: 'Lato', 'Avenir Next', 'San Francisco', '-apple-system', 'BlinkMacSystemFont', '\.SFNSText-Regular', 'Helvetica Neue', Helvetica, sans-serif;
`
