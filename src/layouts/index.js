import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Nav from '../components/Nav'
import '../assets/styles/index.scss'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="sports:direct"
      meta={[
        { name: 'description', content: 'sports:direct is' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav />
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
