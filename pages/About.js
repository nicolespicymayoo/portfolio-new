import React from 'react'
import styled from 'styled-components'
import HomeSection from '../Components/HomeSection'
import SectionTitle from '../Components/SectionTitle'
import mediaQuery from '../helpers/mediaQuery'


const LocationIcon = (props) => (
  <svg {...props} viewBox="0 0 430.114 430.114">
    <path id="Facebook_Places" d="M356.208,107.051c-1.531-5.738-4.64-11.852-6.94-17.205C321.746,23.704,261.611,0,213.055,0
      C148.054,0,76.463,43.586,66.905,133.427v18.355c0,0.766,0.264,7.647,0.639,11.089c5.358,42.816,39.143,88.32,64.375,131.136
		c27.146,45.873,55.314,90.999,83.221,136.106c17.208-29.436,34.354-59.259,51.17-87.933c4.583-8.415,9.903-16.825,14.491-24.857
		c3.058-5.348,8.9-10.696,11.569-15.672c27.145-49.699,70.838-99.782,70.838-149.104v-20.262
		C363.209,126.938,356.581,108.204,356.208,107.051z M214.245,199.193c-19.107,0-40.021-9.554-50.344-35.939
		c-1.538-4.2-1.414-12.617-1.414-13.388v-11.852c0-33.636,28.56-48.932,53.406-48.932c30.588,0,54.245,24.472,54.245,55.06
		C270.138,174.729,244.833,199.193,214.245,199.193z"/>
  </svg>
)

const TwitterIcon = (props) => (
  <svg {...props} viewBox="0 0 430.114 430.114">
    <path d="M449.956,85.657c-17.702,7.614-35.408,12.369-53.102,14.279c19.985-11.991,33.503-28.931,40.546-50.819
      c-18.281,10.847-37.787,18.268-58.532,22.267c-18.274-19.414-40.73-29.125-67.383-29.125c-25.502,0-47.246,8.992-65.24,26.98
		c-17.984,17.987-26.977,39.731-26.977,65.235c0,6.851,0.76,13.896,2.284,21.128c-37.688-1.903-73.042-11.372-106.068-28.407
		C82.46,110.158,54.433,87.46,31.403,59.101c-8.375,14.272-12.564,29.787-12.564,46.536c0,15.798,3.711,30.456,11.138,43.97
		c7.422,13.512,17.417,24.455,29.98,32.831c-14.849-0.572-28.743-4.475-41.684-11.708v1.142c0,22.271,6.995,41.824,20.983,58.674
		c13.99,16.848,31.645,27.453,52.961,31.833c-7.995,2.091-16.086,3.138-24.269,3.138c-5.33,0-11.136-0.475-17.416-1.42
		c5.9,18.459,16.75,33.633,32.546,45.535c15.799,11.896,33.691,18.028,53.677,18.418c-33.498,26.262-71.66,39.393-114.486,39.393
		c-8.186,0-15.607-0.373-22.27-1.139c42.827,27.596,90.03,41.394,141.612,41.394c32.738,0,63.478-5.181,92.21-15.557
		c28.746-10.369,53.297-24.267,73.665-41.686c20.362-17.415,37.925-37.448,52.674-60.097c14.75-22.651,25.738-46.298,32.977-70.946
		c7.23-24.653,10.848-49.344,10.848-74.092c0-5.33-0.096-9.325-0.287-11.991C421.785,120.202,437.202,104.306,449.956,85.657z"/>
  </svg>
)

const GitIcon = (props) => (
  <svg {...props} viewBox="0 0 430.114 430.114">
    <path d="M158.173,352.599c-3.049,0.568-4.381,1.999-3.999,4.281c0.38,2.283,2.093,3.046,5.138,2.283
      c3.049-0.76,4.38-2.095,3.997-3.997C162.931,353.074,161.218,352.216,158.173,352.599z"/>
		<path d="M141.898,354.885c-3.046,0-4.568,1.041-4.568,3.139c0,2.474,1.619,3.518,4.853,3.138c3.046,0,4.57-1.047,4.57-3.138
      C146.753,355.553,145.134,354.502,141.898,354.885z"/>
		<path d="M119.629,354.022c-0.76,2.095,0.478,3.519,3.711,4.284c2.855,1.137,4.664,0.568,5.424-1.714
      c0.572-2.091-0.666-3.61-3.711-4.568C122.197,351.265,120.39,351.922,119.629,354.022z"/>
		<path d="M414.41,24.123C398.326,8.042,378.964,0,356.309,0H82.225C59.577,0,40.208,8.042,24.123,24.123
      C8.042,40.207,0,59.576,0,82.225v274.088c0,22.65,8.042,42.017,24.123,58.098c16.084,16.084,35.454,24.126,58.102,24.126h63.953
			c4.184,0,7.327-0.144,9.42-0.424c2.092-0.288,4.184-1.526,6.279-3.717c2.096-2.187,3.14-5.376,3.14-9.562
			c0-0.568-0.05-7.046-0.144-19.417c-0.097-12.375-0.144-22.176-0.144-29.41l-6.567,1.143c-4.187,0.76-9.469,1.095-15.846,0.999
			c-6.374-0.096-12.99-0.76-19.841-1.998c-6.855-1.239-13.229-4.093-19.13-8.562c-5.898-4.477-10.085-10.328-12.56-17.559
			l-2.856-6.571c-1.903-4.373-4.899-9.229-8.992-14.554c-4.093-5.332-8.232-8.949-12.419-10.852l-1.999-1.428
			c-1.331-0.951-2.568-2.098-3.711-3.429c-1.141-1.335-1.997-2.669-2.568-3.997c-0.571-1.335-0.097-2.43,1.427-3.289
			c1.524-0.855,4.281-1.279,8.28-1.279l5.708,0.855c3.808,0.76,8.516,3.042,14.134,6.851c5.614,3.806,10.229,8.754,13.846,14.843
			c4.38,7.806,9.657,13.75,15.846,17.843c6.184,4.097,12.419,6.143,18.699,6.143s11.704-0.476,16.274-1.424
			c4.565-0.954,8.848-2.385,12.847-4.288c1.713-12.751,6.377-22.559,13.988-29.41c-10.848-1.143-20.602-2.854-29.265-5.14
			c-8.658-2.286-17.605-5.995-26.835-11.136c-9.234-5.14-16.894-11.512-22.985-19.13c-6.09-7.618-11.088-17.61-14.987-29.978
			c-3.901-12.375-5.852-26.652-5.852-42.829c0-23.029,7.521-42.637,22.557-58.814c-7.044-17.32-6.379-36.732,1.997-58.242
			c5.52-1.714,13.706-0.428,24.554,3.855c10.85,4.286,18.794,7.951,23.84,10.992c5.046,3.042,9.089,5.614,12.135,7.71
			c17.705-4.949,35.976-7.423,54.818-7.423c18.841,0,37.115,2.474,54.821,7.423l10.849-6.852c7.426-4.57,16.18-8.757,26.269-12.562
			c10.088-3.806,17.795-4.854,23.127-3.14c8.562,21.51,9.328,40.922,2.279,58.241c15.036,16.179,22.559,35.786,22.559,58.815
			c0,16.18-1.951,30.505-5.852,42.969c-3.898,12.467-8.939,22.463-15.13,29.981c-6.184,7.519-13.894,13.843-23.124,18.986
			c-9.232,5.137-18.178,8.853-26.84,11.132c-8.661,2.286-18.414,4.004-29.263,5.147c9.891,8.562,14.839,22.072,14.839,40.538v68.238
			c0,3.237,0.472,5.852,1.424,7.851c0.958,1.998,2.478,3.374,4.571,4.141c2.102,0.76,3.949,1.235,5.571,1.424
			c1.622,0.191,3.949,0.287,6.995,0.287h63.953c22.648,0,42.018-8.042,58.095-24.126c16.084-16.084,24.126-35.454,24.126-58.102
			V82.225C438.533,59.576,430.491,40.204,414.41,24.123z"/>
		<path d="M86.793,319.195c-1.331,0.948-1.141,2.471,0.572,4.565c1.906,1.902,3.427,2.189,4.57,0.855
      c1.331-0.948,1.141-2.471-0.575-4.569C89.458,318.336,87.936,318.049,86.793,319.195z"/>
		<path d="M77.374,312.057c-0.57,1.335,0.096,2.478,1.999,3.426c1.521,0.955,2.762,0.767,3.711-0.568
      c0.57-1.335-0.096-2.478-1.999-3.433C79.182,310.91,77.945,311.102,77.374,312.057z"/>
		<path d="M95.646,330.331c-1.715,0.948-1.715,2.666,0,5.137c1.713,2.478,3.328,3.142,4.853,1.998c1.714-1.334,1.714-3.142,0-5.427
      C98.978,329.571,97.359,328.993,95.646,330.331z"/>
		<path d="M105.641,343.174c-1.714,1.526-1.336,3.327,1.142,5.428c2.281,2.279,4.185,2.566,5.708,0.849
      c1.524-1.519,1.143-3.326-1.142-5.42C109.068,341.751,107.164,341.463,105.641,343.174z"/>
  </svg>
)


const About = () => (
  <HomeSectionAbout>
      <AboutTextContainer>
        <AboutSectionTitle>About</AboutSectionTitle>
        <AboutParagraph>
          Self-taught programmer, specializing in front-end applications. I love to build beautiful, funtional websites with intuitive UX. I quit hospitality work and spent two years building websites and learning computer fundamentals. If you're interested in learning to code, or are hiring at your awesome company, <a href="mailto:nicolemayobiz@gmail.com">let's chat</a>. 
        </AboutParagraph>
      </AboutTextContainer>
      
      <AboutDetails>
        <PictureBorder><Picture /></PictureBorder>
        <DetailList>
          <DetailItem>
            <LocationIcon height="14px" width="14px" fill="rgba(107, 185, 240, .65)"/>
            <DetailText>SF</DetailText>
          </DetailItem>
          <DetailItem>
            <a target="_blank" href="https://github.com/nicolespicymayoo"><GitIcon height="14px" width="14px" fill="rgba(107, 185, 240, .65)" /></a>
          </DetailItem>
          <DetailItem>
            <a target="_blank" href="https://twitter.com/SpicyAsianMayo"><TwitterIcon height="14px" width="14px" fill="rgba(107, 185, 240, .65)" /></a>
          </DetailItem>
        </DetailList>
      </AboutDetails>
    
  </HomeSectionAbout>
)

export default About

const HomeSectionAbout = styled(HomeSection)`
  display: flex;
  justify-content: center;
  align-items: top;
  ${mediaQuery.tablet`
      flex-direction: column-reverse;
      justify-content: center;
  `};
`

const AboutTextContainer = styled.div`
  width: 40%;
  text-align: left;
  align-items: top;
  margin: auto;
  ${mediaQuery.tablet`
      width: 60%;
  `};
  ${mediaQuery.mobile`
      width: 90%;
  `};
`

const AboutSectionTitle = styled.div`
  text-align: left;
  font-family: 'Lato', 'Avenir', Helvetica;
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 2px;
  margin-bottom: 40px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 26px;
`

const AboutParagraph = styled.div`
  font-size: 16px;
  line-height: 1.6;
  letter-spacing: 0.28px;
  color: black;
  font-weight: 150;
  a {
    color: black;
    text-decoration-style: solid;
    text-decoration-color: rgba(0, 0, 0, 0.2);
  }
  a:visited {
    color: black;
  }
`
const AboutDetails = styled.div`
  align-items: top;
  margin: auto;
  ${mediaQuery.tablet`
      margin-bottom: 65px;
  `};
`

const PictureBorder = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-color: #eff2f6;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  
`

const Picture = styled.div`
  height: 180px;
  width: 180px;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background-image: url('../static/about_pic.png');
  background-position: -13px -2px;
  background-size: 122%;
  transform: rotate(15deg);
  overflow: hidden;
`

const DetailList = styled.div`
  margin-top: 16px;
  text-align: center;
  ${mediaQuery.tablet`
      border-bottom: 40px;
  `};
`

const DetailItem = styled.div`
  padding: 8px 10px;
  display: inline-block;
  vertical-align: middle;
`

const DetailIcon = styled.div`
  display: inline-block;
  vertical-align: middle;
`

const DetailText = styled.div`
  display: inline-block;
  vertical-align: top;
  font-size: 13px;
  font-weight: 100;
  padding-left: 3px;

`