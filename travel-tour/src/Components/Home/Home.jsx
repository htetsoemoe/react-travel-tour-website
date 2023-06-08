import React from 'react'
import './home.css'
import video from '../../assets/video1.mp4'
import { GrLocation } from 'react-icons/gr'
import { HiFilter } from 'react-icons/hi'
import { FiFacebook } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { BsListTask } from 'react-icons/bs'
import { TbApps } from 'react-icons/tb'

const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>

      <div className="homeContent container">
        {/* home section => text layer above 'overlay' and 'video' */}
        <div className="textDiv">
          <span className="smallText">
            Our Packages
          </span>
          <h1 className="homeTitle">
            Search your holidays
          </h1>
        </div>

        {/* home section => input from  */}
        <div className="cardDiv grid">
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
              <div className="total">$5000</div>
            </div>
            <div className="flex input">
              <input type="range" max="5000" min="1000" name="" id="" />
            </div>
          </div>

          <div className="searchOption flex">
            <HiFilter className='icon' />
            <span>MORE FILTER</span>
          </div>
        </div>

        {/* home section => home footer */}
        <div className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon" />
            <AiOutlineInstagram className="icon" />
            <FaTripadvisor className="icon" />
          </div>

          <div className="leftIcons">
            <BsListTask className="icon" />
            <TbApps className="icon"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
