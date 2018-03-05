import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link';
import Nav from '../components/Nav';
import '../assets/styles/index.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="sports:direct"
      meta={[
        { name: 'description', content: 'sports:direct is' },
        { name: 'keywords', content: 'sample, something' },
      ]}>
      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.js"></script>
      <script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.8.4/plugins/ScrollToPlugin.min.js"></script>
      </Helmet>
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
