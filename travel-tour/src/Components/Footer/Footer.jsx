import React from 'react'
import './footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend } from 'react-icons/fi'
import { MdTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FaChevronRight } from 'react-icons/fa'

// This variable used in footer section
const thisYear = new Date().getFullYear()

const Footer = () => {
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder='Enter email address' />
            <button className="btn flex" type='submit'>
              <FiSend className="icon" />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdTravelExplore className='icon' />
                <small className="companyName">T&H Travel.</small>
              </a>
            </div>

            <div className="footerParagraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, amet. Placeat facere doloremque neque tempore pariatur atque quas fuga accusantium?
            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiFillYoutube className='icon' />
              <AiFillInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div className="linkGroup">
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
            <div className="linkGroup">
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
            <div className="linkGroup">
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
            <small>Copyrights Reserved - {thisYear}</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
