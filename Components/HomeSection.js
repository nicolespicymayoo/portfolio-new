import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../helpers/mediaQuery'

const HomeSection = styled.div`
  display: block;
  padding: 120px 00px;
  width: 100%;
  margin: 0px;
  ${mediaQuery.mobile`
    padding: 100px 0px;
  `}
`
export default HomeSection