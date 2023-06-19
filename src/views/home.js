import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Interactions Designer</title>
        <meta property="og:title" content="Internal Interactions Designer" />
      </Helmet>
    </div>
  )
}

export default Home
