import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../helpers/mediaQuery'

const Navbar = () => (
  <NavbarContianer>
    <NavbarItems>
      <a href="#header" style={{color: '#ffffff'}}>Home</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#services">Services</a>
      <a href="#services">Skills</a>
      <a href="#contact">Contact</a>
    </NavbarItems>
  </NavbarContianer>
)

export default Navbar


const NavbarContianer = styled.div`
  transition: all .3s;
  padding-bottom: 30px;
`
const NavbarItems = styled.div`
  a{
    text-decoration: none;
    text-transform: uppercase;
    color: rgba(255,255,255,.6);
    display: inline-block
    padding: 0 40px;
    color: rgba(255, 255, 255, .45);
    letter-spacing: 1.5px;
    font-weight: 200;
    text-transform: uppercase;
    font-size: .75rem;
    &:active{color: #fafafa;}
    ${mediaQuery.tablet`
      padding: 0 15px;
    `}
    ${mediaQuery.mobile`
      font-size: .76em;
      padding: 8px 10px;
    `}
  }
`
