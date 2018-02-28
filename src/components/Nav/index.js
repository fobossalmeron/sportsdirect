import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <header>
        <Link to="http://designsuccess.com">
          design:success
        </Link>
        <Link to="/">
          sports:direct
        </Link>
        <Link to="#background">
          background
        </Link>
        <Link to="#platform">
          platform
        </Link>
        <Link to="#benefits">
          benefits
        </Link>
        <Link to="#trustedby">
          trusted by
        </Link>
        <Link to="#engage">
          engage
        </Link>
  </header>
)

export default Nav
