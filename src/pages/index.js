import React from 'react'
import Link from 'gatsby-link'
import ReactPlayer from 'react-player'
import Platform from '../components/Platform/index'

const IndexPage = () => (
  <div className="bodyLimit">
    <section id="home">
      <h1>sports:direct</h1>
      <h2>invest, increase & protect your brand & investment</h2>
      <div className="homeText">
        <p>the world’s first sports talent social media data
          & management platform that:</p>
        <ul>
          <li>grow</li>
          <li>manage</li>
          <li>coach</li>
          <li>monitor 24/7/365</li>
          <li>mine big data</li>
          <li>in-depth report</li>
          <li>…and crisis manage if needed</li>
        </ul>
        <p>all while:</p>
        <ul>
          <li>eliminating or reducing risk</li>
          <li>protecting your investment & brand</li>
          <li>tracking and protecting ROI</li>
        </ul>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </section>
    <section id="video">
    <div className="videoWrapper">
      <div className="videoOverlay"></div>
      <ReactPlayer url="http://vimeo.com/256668685" playsinline={true}/>
    </div>
    </section>
    <section id="background">
     <h2>the <br/>background</h2>
     <div className="backgroundText">
     <p>Social Media is important for brands!</p>
     <p><b>BUT</b> Brands, athletes, agents, clubs, and
      federations face new and increased
      challenges or dangers because of <b>social
      media speed</b> and <b>transparency</b>. <b>What is the
      true ROI, Who is really following on Social
      Media. And how to protect investments.</b></p>
      </div>
    </section>
    <section id="platform">
    <h2>#1 propietary<br/>platform & solution</h2>
    <p>9 cutting-edge tools</p>
    <Platform />
    </section>
    <section id="benefits">
    </section>
    <section id="trustedby">
    </section>
    <section id="engage">
    </section>
  </div>
)

export default IndexPage
