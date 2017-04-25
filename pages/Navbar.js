import React from 'react'
import styled from 'styled-components'

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
    margin: 0 40px;
    color: rgba(255, 255, 255, .45);
    letter-spacing: 1px;
    font-weight: 200;
    text-transform: uppercase;
    font-size: .8rem;
    &:active{color: #fafafa;}
  }
`
