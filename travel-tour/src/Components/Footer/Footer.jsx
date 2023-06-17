import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

// Using AOS library
import Aos from 'aos'
import 'aos/dist/aos.css'

// This variable used in footer section
const thisYear = new Date().getFullYear()

const Footer = () => {
  // add animation on scroll using useEffect hook
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter email address' />
            <button data-aos="fade-up" className="btn flex" type='submit'>
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div data-aos="fade-up" className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className='icon' />
                <small className="companyName">T&H Travel.</small>
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, amet. Placeat facere doloremque neque tempore pariatur atque quas fuga accusantium?
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <ol>
                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Services</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Insurance</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Agency</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Tourism</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Payment</a>
                </li>
              </ol>
            </div>

            {/* Group Two */}
            <div data-aos="fade-up"
              data-aos-duration="3000"
              className="linkGroup">
              <span className="groupTitle">
                PARTNER
              </span>

              <ol>
                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Bookings</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Rentcars</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">HostelWorld</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Trivago</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">TripAdvisor</a>
                </li>
              </ol>
            </div>

            {/* Group Three */}
            <div data-aos="fade-up"
              data-aos-duration="5000"
              className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <ol>
                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">London</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">California</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Thailand</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Indonesia</a>
                </li>

                <li className="footerList flex">
                  <FaChevronRight className='iconFont' />
                  <a href="#">Dubai</a>
                </li>
              </ol>
            </div>
          </div>

          <div className="footerDiv flex">
            <small>T&H Travel Agency</small>
            <small>Copyrights &copy; {thisYear}</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
