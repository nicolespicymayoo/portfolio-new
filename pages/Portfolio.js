import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection'
import SectionTitle from '../Components/SectionTitle'
import PortfolioItem from './PortfolioItem'

const Portfolio = () => (
  <HomeSection id="portfolio">
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
  </HomeSection>
)

export default Portfolio


const PortfolioList = styled.div`
  text-align: center;
`

