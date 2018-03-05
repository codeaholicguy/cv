import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import data from '../data/cv.json'

const styles = {
  layout: {
    fontFamily: 'Helvetica, arial, sans-serif',
    padding: `10px 30px 10px 30px`
  }
}

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.func
  }

  static childContextTypes = {
    data: PropTypes.object
  }

  getChildContext() {
    return {data}
  }

  render() {
    const {children} = this.props

    return (
      <div>
        <Helmet
          title={data.meta.title}
          meta={[
            {name: 'description', content: data.meta.description},
            {name: 'keywords', content: data.meta.keywords}
          ]}
        />
        <div style={styles.layout}>{children()}</div>
      </div>
    )
  }
}
