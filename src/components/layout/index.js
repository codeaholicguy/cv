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
                  {name: 'keywords', content: meta.keywords}
                ]}
              />
              <div style={styles.layout}>{children}</div>
            </div>
          )
        }}
      </ContentContext.Consumer>
    )
  }
}
