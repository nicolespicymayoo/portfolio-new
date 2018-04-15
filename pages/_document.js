import Document, { Head, Main, NextScript } from 'next/document'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import mediaQuery from '../helpers/mediaQuery'

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styles = (
      <style dangerouslySetInnerHTML={{ __html:
        styleSheet.rules().map(rule => rule.cssText).join('\n')
       }} />
    )
    return { ...page, styles }
  }
  render () {
    return <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Front-end Web Development and Responsive Web Design" />
          <title>Nicole Mayo | Front-end Developer</title>
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:300" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato:300,400,500" rel="stylesheet" />
          <style>
            {`
            html, body {
              font-family: Lato, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
              Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;
              font-size: 16px;
              color: #373b4c;
              margin: 0px;
              padding: 0px;
              height: 100%;
              width: 100%;
              font-smoothing: antialiased;
              scroll-behavior: smooth; 
              min-width: 320px;
              ${mediaQuery.mobile`font-size: 15px;`}
            }
            p, h1, h2, h3 {
              margin: 0;
              padding: 0;
            }
            * {
              box-sizing: border-box;
            }
          `}
          </style>
          <meta name="keywords" content="Developer, Front-end Developer, Web Developer, React Developer, React.js, Responsive Design" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
  }
}