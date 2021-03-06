import React from 'react'
import styled from 'styled-components'
import mediaQuery from '../helpers/mediaQuery'

const PortfolioItemWeb = ({ image, link, title, websiteType }) => (
  <PortfolioItemContainer id="portfolio">
    <a target="_blank" href={link}>
    <ImageContainer>
      <WindowBar>
        <WindowButton></WindowButton>
        <WindowButton></WindowButton>
        <WindowButton></WindowButton>
      </WindowBar>
      <Image image={image}/>
    </ImageContainer>

    <Detail>
      <h3>{title}</h3>
      <p>{websiteType}</p>
    </Detail>
    </a>
  </PortfolioItemContainer>

)

export default PortfolioItemWeb

const PortfolioItemContainer = styled.div`
  margin: 5px 30px;
  display: inline-block;
  a{
    text-decoration: none;
    &:hover{
      cursor: pointer;
    }
    &:visited{color: inherit;}
  }
  ${mediaQuery.tablet`
      margin: 10px 20px 25px;
  `}
  ${mediaQuery.mobile`
      margin: 10px 0px 50px;
  `}
`

const ImageContainer = styled.div`
  height: 230px;
  width: 310px;
  background-size: cover;
  background-position: center;
  border-radius: 4px;
  margin: 0 auto;
  vertical-align: top;
  overflow: hidden;
  /*box-shadow: 0px 1px 7px 0px rgba(0,0,0,.04);*/
  box-shadow: 1px 4px 20px 2px rgba(50,50,94,.06);
  border: 2px solid white;
  border-top: none;
  &:hover{
      transform: scale(1.02);
      transition: all .2s;
    }
  ${mediaQuery.mobile`
      height: 220px;
      width: 300px;
  `}
  ${mediaQuery.smallMobile`
      height: 200px;
      width: 280px;
  `}
`

const WindowBar = styled.div`
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
  padding-left: 3px;
  height: 15px;
  border: .2px solid rgba(0,0,0,.07);
  width: 315px;
  background-color: #fff;
  text-align: left;
`

const WindowButton = styled.div`
  display: inline-block;
  height: 6px;
  width: 6px;
  background-color: rgba(0,0,0,.091);
  border-radius: 5px;
  margin: 5px 1px;
  padding: 0;
  vertical-align: top;
`

const Image = styled.div`
  height: 223px;  
  width: 320px;
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  vertical-align: top;
  backgroundImage: ${props => `url(` + props.image +`)`};
  border-top: 0;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
   ${mediaQuery.mobile`
      height: 200px;
      width: 300px;
  `}
`

const Detail = styled.div`
  text-transform: uppercase;
  padding: 35px 4px 0;
  text-align: left;
  text-decoration: none;
  h3{
    font-size: 17px;
    font-weight: 200;
    letter-spacing: .4px;
    line-height: 0;
  }
  p{
    font-size: .74em;
    letter-spacing: .65px;
    font-weight: 300;
    color: rgba(0,0,0,.8);
    padding-top: 18px;
    ${mediaQuery.mobile`
        font-size: .78em;
    `}
  }
`