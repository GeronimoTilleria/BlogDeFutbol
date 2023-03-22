import React from 'react'
import Footer from '../layouts/Footer'
import HomeHeader from '../layouts/HomeHeader'
import InfoAboutUs from '../layouts/InfoAboutUs'
import ListBlogHome from '../layouts/ListBlogHome'

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <InfoAboutUs />
      <ListBlogHome />
      <Footer />
    </div>
  )
}

export default Home
