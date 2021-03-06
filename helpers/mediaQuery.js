import React from 'react'
import { css } from 'styled-components'

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 800,
  mobile: 450,
  smallMobile: 350
}

const mediaQuery = Object.keys(sizes).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default mediaQuery