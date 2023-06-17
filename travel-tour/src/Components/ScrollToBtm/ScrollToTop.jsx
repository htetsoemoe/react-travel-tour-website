import React, { useEffect, useState } from 'react'
import './scrolltotop.css'
import { FaAngleUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [showBtn, setShowBtn] = useState(false)

    // changing the showBtn state whenever a scroll event happens
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowBtn(true)
            } else {
                setShowBtn(false)
            }
        })
    }, [])

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='topToBtm'>
            {
                showBtn && (<FaAngleUp onClick={goToTop}
                    className='iconPosition iconStyle' />)
            }
        </div>
    )
}

export default ScrollToTop
