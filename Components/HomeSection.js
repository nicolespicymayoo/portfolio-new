import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../helpers/mediaQuery'

const HomeSection = styled.div`
  display: block;
  padding: 120px 30px;
  ${mediaQuery.mobile`
      padding: 100px 20px;
    `}
`
export default HomeSection