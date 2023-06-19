import React, { useState, useEffect } from 'react'
import './home.css'
import video from '../../assets/video1.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'
import { Slider, Text, Box } from '@mantine/core'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // state for input slider
  const [price, setPrice] = useState(500)

  // add animation on scroll using useEffect hook
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        {/* home section => text layer above 'overlay' and 'video' */}
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search Your Holidays
          </h1>
        </div>

        {/* home section => input from  */}
        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter place (e.g, Indonesia, Thailand, ...)' />
              <GrLocation className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <div className="total">
                <Text size="lg">
                  $ {price}
                </Text>
              </div>
            </div>
            <div className="flex input">
              <input onChange={(event) => setPrice(event.target.value)} type="range" max="5000" min="1000" name="" id="" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className='icon' />
            <span>MORE FILTER</span>
          </div>
        </div>

        {/* home section => home footer */}
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
