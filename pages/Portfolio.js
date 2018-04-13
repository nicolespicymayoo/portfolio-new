import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection'
import SectionTitle from '../Components/SectionTitle'
import PortfolioItemWeb from './PortfolioItemWeb'
import mediaQuery from '../helpers/mediaQuery'

const KeyIcon = () => (
  <svg
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style={{
      height: '12px',
      width: '14px',
      fill: '#6bb9f0',
      paddingTop: '0px',
      paddingLeft: '3px',
      paddingBottom: '0px',
      paddingRight: '3px'
    }}
  >
    <g>
      <path
        d="M205.017,341.995l-32.166-32.161l110.691-110.701c40.217,21.676,91.214,15.992,125.209-17.947
        c41.406-41.462,41.406-108.687,0-150.091c-41.458-41.46-108.688-41.46-150.149,0c-33.937,33.941-39.593,84.999-17.931,125.157
        L22.751,374.216c-11.803,11.789-11.803,31.097,0,42.881c11.785,11.789,31.097,11.789,42.881,0l32.161,32.165
        c5.927,5.923,15.521,5.923,21.443,0l21.443-21.44c5.934-5.922,5.934-15.518,0-21.44l-32.163-32.165l21.44-21.506l32.177,32.226
        c5.923,5.923,15.521,5.923,21.443,0l21.441-21.44C210.939,357.512,210.939,347.982,205.017,341.995z M301.488,73.98
        c17.768-17.768,46.619-17.768,64.387,0c17.702,17.709,17.702,46.612,0,64.324c-17.768,17.709-46.619,17.709-64.387,0
        C283.776,120.593,283.776,91.69,301.488,73.98z"
      />
    </g>
  </svg>
)

const SearchIcon = () => (
  <svg
    x="0px"
    y="0px"
    viewBox="-10 40 310.42 310.42"
    style={{
      height: '10.5px',
      width: '11px',
      fill: '#6bb9f0',
      paddingTop: '0px',
      paddingLeft: '5px',
      paddingBottom: '0px',
      paddingRight: '5px',
      overflow: 'visible'
    }}
  >
    <g>
      <path
        d="M273.587,214.965c49.11-49.111,49.109-129.021,0-178.132c-49.111-49.111-129.02-49.111-178.13,0
			C53.793,78.497,47.483,140.462,76.51,188.85c0,0,2.085,3.498-0.731,6.312c-16.065,16.064-64.263,64.263-64.263,64.263
			c-12.791,12.79-15.836,30.675-4.493,42.02l1.953,1.951c11.343,11.345,29.229,8.301,42.019-4.49c0,0,48.096-48.097,64.128-64.128
			c2.951-2.951,6.448-0.866,6.448-0.866C169.958,262.938,231.923,256.629,273.587,214.965z M118.711,191.71
			c-36.288-36.288-36.287-95.332,0.001-131.62c36.288-36.287,95.332-36.288,131.619,0c36.288,36.287,36.288,95.332,0,131.62
			C214.043,227.996,155,227.996,118.711,191.71z"
      />
    </g>
    <g>
      <path
        d="M126.75,118.424c-1.689,0-3.406-0.332-5.061-1.031c-6.611-2.798-9.704-10.426-6.906-17.038
				c17.586-41.559,65.703-61.062,107.261-43.476c6.611,2.798,9.704,10.426,6.906,17.038c-2.799,6.612-10.425,9.703-17.039,6.906
				c-28.354-11.998-61.186,1.309-73.183,29.663C136.629,115.445,131.815,118.424,126.75,118.424z"
      />
    </g>
  </svg>
)

const Portfolio = () => (
  <PortfolioContainer id="portfolio">
    <SectionTitle>Latest Work</SectionTitle>
    <PortfolioList>
      <PortfolioItemWeb
        image={'../static/platform.png'}
        link="https://quesly.com/features"
        title="Quesly"
        websiteType="Platform"
      />
      <PortfolioItemWeb
        image={'../static/portfolio.png'}
        link="https://jjartproduction.com/"
        title="JJ Art Productions"
        websiteType="Portfolio"
      />
      <PortfolioItemWeb
        image={'../static/small-biz.png'}
        link="http://jingjiangacupuncture.com/"
        title="Jing Jiang Accupuncture"
        websiteType="Small Business"
      />
    </PortfolioList>
    <PortfolioList>
      <a target="_blank" href="https://github.com/nicolespicymayoo/lob-elixir">
        <PortfolioItem>
          <Icon><KeyIcon/></Icon>
          <Title>Lob Client</Title>
          <Description>Client for Lob API service, coded in Elixir.</Description>
        </PortfolioItem>
      </a>
      <a
        target="_blank"
        href="https://github.com/nicolespicymayoo/where-can-i-eat"
      >
        <PortfolioItem> 
          <Icon><SearchIcon/></Icon>
          <Title>Where can I eat?</Title>
           <Description>Helps people with allergies or diet restrictions find places to eat.</Description>
        </PortfolioItem>
      </a>
    </PortfolioList>
  </PortfolioContainer>
)

export default Portfolio

const PortfolioContainer = styled(HomeSection)`
  background-color: #f6f8fa;
  padding-left: 10px;
  padding-right: 10px;
  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      cursor: pointer;
    }
    &:visited {
      color: inherit;
    }
  }
`

const PortfolioList = styled.div`
  text-align: center; 
  /* to center the divs on page */
`

const PortfolioItem = styled.div`
  display: inline-block;
  font-size: 15px;
  text-align: left;
  background-color: #fff;
  padding: 24px;
  width: 230px;
  margin: 80px 40px 50px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 200;
  letter-spacing: 0.4px;
  box-shadow: 1px 4px 20px 2px rgba(50, 50, 94, 0.02);
  border-top: none;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s;
  }
  ${mediaQuery.mobile`
    margin-top: 50px;
  `};
`

const Icon = styled.div`
  display: inline;
  /* background-color: #6bb9f0; */
  /* padding: 0px 3px; */
  margin-right: 8px;
  border-radius: 50%;
  border: 1px solid #6bb9f0;
`

const Title = styled.div`
  text-transform: uppercase;
  display: inline;
`

const Description = styled.div`
  font-size: 0.76em;
  letter-spacing: 0.64px;
  line-height: 1.5;
  font-weight: 300;
  color: rgba(0, 0, 0, 0.8);
  padding-top: 18px;
  ${mediaQuery.mobile`
    font-size: .78em;
  `};
`
