import React from 'react'
import Nav from '../Nave/Nav'
import Announce from '../Nave/Announce'
import Slider from '../Slider/Slider'
import Categories from '../categories/Categories'
import Products from '../Products/Products'
import Newsletter from '../Newsletter/Newsletter'
import Foooter from '../Footer/Foooter'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Nav/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Foooter/>
    </div>
  )
}

export default Home