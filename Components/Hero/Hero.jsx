import React from 'react'
import './Hero.css'
import hand_icon from '../Assests/hand_icon.png'
import arrow_icon from '../Assests/arrow.png'
import hero_img from '../Assests/hero_image.png'
 const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
         <h2>🙏🏾जय जिनेन्द्र🙏🏾</h2>
         <div>
            <div className="hero-hand-icon">
                <p>New</p>
                <img src={hand_icon} alt="" />
            </div>
        <p>Experience</p>
        <p>for everyone</p>
         </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right">
         <img src={hero_img} alt="" height="650px"/>
        </div>

    </div>
  )
}

export default Hero
