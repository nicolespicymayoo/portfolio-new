import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection'
import SectionTitle from '../Components/SectionTitle'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => (
  <PortfolioContainer id="portfolio">
    <SectionTitle>Latest Work</SectionTitle>
    <PortfolioList>
      <PortfolioItem
          image={'../static/platform.png'}
          link="https://quesly.com/features"
          title="Quesly"
          websiteType="Platform"
        />
        <PortfolioItem
          image={'../static/portfolio.png'}
          link="https://jjartproduction.com/"
          title="JJ Art Productions"
          websiteType="Portfolio"
        />
        <PortfolioItem
          image={'../static/small-biz.png'}
          link="http://jingjiangacupuncture.com/"
          title="Jing Jiang Accupuncture"
          websiteType="Small Business"
        />
    </PortfolioList>
    <a target="_blank" href="https://github.com/nicolespicymayoo/lob-elixir">
      <BackendPortfolioItem> Elixir Lob API Client </BackendPortfolioItem>
    </a>
  </PortfolioContainer>
)

export default Portfolio

const PortfolioContainer = styled(HomeSection)`
  background-color: #F6F8FA;
  padding-left: 10px;
  padding-right: 10px;
  a{
    text-decoration: none;
    &:hover{
      cursor: pointer;
    }
    &:visited{color: inherit;}
  }
`

const PortfolioList = styled.div`
  text-align: center;
`

const BackendPortfolioItem = styled.div`
  text-align: center;
  font-size: 15px;
  background-color: #fff;
  padding: 24px;
  width: 230px;
  margin: 80px auto 50px;
  border-radius: 50px;
  font-size: 17px;
  font-weight: 200;
  letter-spacing: .4px;
  box-shadow: 1px 4px 20px 2px rgba(50,50,94,.02);
  border-top: none;
  &:hover{
      transform: scale(1.02);
      transition: all .2s;
    }
`

