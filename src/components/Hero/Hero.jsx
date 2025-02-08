import React from 'react'
import './Hero.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section id="Hero">
    <div className='hero'>
        <div className='hero-text'>
            <h1>Ignite Passion, Build Connections, Achieve Together</h1>
            <p>Your one-stop platform to explore college clubs, connect with like-minded peers, and stay updated on events and opportunities. Join, grow, and make the most of your college journey</p>
            <Link to="/WhyJoin" className="btn-link">
            <div className="btn">
              Explore more <IoIosArrowRoundForward className="arrow-icon" />
            </div>
          </Link>
        </div>
    </div>
    </section>
  )
}

export default HeroSection
