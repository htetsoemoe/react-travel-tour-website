import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'
import { Spin as Hamburger, Spin } from 'hamburger-react'

const Navbar = () => {
  const [active, setActive] = useState("navBar") // max-width: 760px navBar will disappear
  const [isOpen, setOpen] = useState(false) // useState for hamburger menu open and close

  // Function for toggle navBar
  const showNavMenuHandler = () => {
    setActive("navBar activeNavBar")
    setOpen(true)
  }

  // Function for close navbar menu
  const hideNavMenuHandler = () => {
    setActive("navBar")
    setOpen(false)
  }

  return (
    <section className="navBarSection">
      <header className="header flex">

        <div className="logoDiv">
          <a href="#" className='logo flex'>
            <h1><MdOutlineTravelExplore className='icon' /> T&H Travel.</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Booking</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Tickets</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Blog</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={hideNavMenuHandler} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>


        {/* 
          Before using Netlify Animated hamburger menu icons library
        <div onClick={showNavMenuHandler} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div> */}

        {/* Using Netlify Animated hamburger menu icons library */}
        <div className="toggleNavbar">
          <Hamburger toggled={isOpen} onToggle={showNavMenuHandler} duration={0.8} />
        </div>


      </header>
    </section>
  )
}

export default Navbar
