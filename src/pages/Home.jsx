import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const handleClick = () => {
  console.log("Button Clicked")
}

const Home = () => {
  return (
    <div>
      <Announcement/>
        <NavBar onClickMe = { this.handleClick } />
        <Slider />
        <Categories />
        <Products />
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default Home