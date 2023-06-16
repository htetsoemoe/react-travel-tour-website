import React, { useEffect } from 'react'
import './main.css'
import { HiLocationMarker } from 'react-icons/hi'
import { HiOutlineClipboardCheck } from 'react-icons/hi'

// import JSON from assets/destination.js
import destinations from '../../assets/destination'

// Using AOS library
import Aos from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
  // add animation on scroll using useEffect hook
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited Destinations
        </h3>
      </div>

      <div className="secContent grid">
        {
          destinations.map((destination) => {
            return (
              <div data-aos="fade-up" key={destination.id} className="singleDestination">
                <div className="imageDiv">
                  <img src={destination.image} alt={destination.destTitle} />
                </div>

                <div className="cardInfo">
                  <h1 className="destTitle">{destination.destTitle}</h1>
                  <span className="continent flex">
                    <HiLocationMarker className="icon" />
                    <span className="name">{destination.location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{destination.grade} <small>+1</small> </span>
                    </div>
                    <div className="price">
                      <h4>{destination.fees}</h4>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{destination.description}</p>
                  </div>
                  <button className="btn flex">
                    DETAILS <HiOutlineClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Main
