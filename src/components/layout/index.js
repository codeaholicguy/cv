import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import ContentContext from '../../context/content'

const styles = {
  layout: {
    fontFamily: 'Helvetica, arial, sans-serif',
    margin: 'auto',
    padding: `10px 30px 10px 30px`,
    maxWidth: `720px`
  }
}

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render() {
    const {children} = this.props

    return (
      <ContentContext.Consumer>
        {({meta}) => {
          return (
            <div>
              <Helmet
                title={meta.title}
                meta={[
                  {name: 'description', content: meta.description},
                  {name: 'keywords', content: meta.keywords},
                  {name: 'og:title', content: meta.title},
                  {name: 'og:description', content: meta.description},
                  {name: 'og:type', content: 'website'},
                  {name: 'og:locale', content: 'vi_VN'},
                  {name: 'og:site_name', content: meta.title}
                ]}
              >
                <style type="text/css">{`
                  @media print {
                    @page {
                      size: A4;
                      margin: 10mm 12mm;
                    }

                    body {
                      font-size: 9pt;
                      line-height: 1.25;
                    }

                    .cv-content {
                      max-width: none !important;
                      padding: 0 !important;
                    }

                    h1 {
                      font-size: 21pt;
                      margin: 0 0 3pt;
                    }

                    h2 {
                      font-size: 12.5pt;
                      margin: 8pt 0 3pt;
                      padding-bottom: 2pt !important;
                    }

                    h3 {
                      break-after: avoid;
                      font-size: 10.5pt;
                      margin: 6pt 0 2pt;
                    }

                    p {
                      margin: 2pt 0;
                    }

                    ul {
                      margin: 2pt 0;
                      padding-left: 16pt;
                    }

                    li {
                      break-inside: avoid;
                      margin: 1pt 0;
                    }

                    .cv-page-two {
                      break-before: page;
                    }

                    a {
                      color: #000;
                      text-decoration: none;
                    }
                  }
                `}</style>
              </Helmet>
              <div className="cv-content" style={styles.layout}>
                {children}
              </div>
            </div>
          )
        }}
      </ContentContext.Consumer>
    )
  }
}
