import React from 'react'
import styled from 'styled-components'

const SectionTitle = styled.div`
  text-align: center;
  font-family: 'Lato', 'Avenir', Helvetica;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 2px;
  margin-bottom: 80px;
  color: rgba(0,0,0,.5);
  font-size: 26px;
  &::after{
  width: 50px;
  height: 1px;
  display: block;
  background-color: rgba(0,0,0,.13);
  content: "";
  margin: 15px auto 0;
`

export default SectionTitle

