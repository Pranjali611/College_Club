import React from 'react'
import './About.css'
import about_logo from '../../assets/vit_logo.png'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaEarthAmericas } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaSquarePhone } from "react-icons/fa6";




const About = () => {
  return (
    <section id="About">
    <div className='about' id='About'>
        <div className='about-left'>
        <ul className='social-links'>
            <li>
            <a href="https://www.viit.ac.in/" target="_blank" rel="noopener noreferrer">
            <FaEarthAmericas className='icon1'/> Official Website</a>
            </li>
            <li>
            <a href="https://www.facebook.com/VishwakarmaInstitute" target="_blank" rel="noopener noreferrer"><FaFacebook className='icon2'/> Facebook</a>
            </li>
            <li>
            <a href="https://twitter.com/VIT_Kondhwa" target="_blank" rel="noopener noreferrer"><FaTwitter className='icon3'/> Twitter</a>
            </li>
          <li>
            <a href="https://www.instagram.com/Vishwakarma_Institute" target="_blank" rel="noopener noreferrer"><FaInstagram className='icon4'/> Instagram</a>
            </li>
          <li>
            <a href="https://www.linkedin.com/school/vishwakarma-institute" target="_blank" rel="noopener noreferrer"><FaLinkedin className='icon5'/> LinkedIn</a>
            </li>
          <li>
            <a href="https://www.youtube.com/channel/VIT_Kondhwa" target="_blank" rel="noopener noreferrer">
            <FaYoutube className='icon6'/> YouTube</a>
            </li>
            <li>
                <a><MdOutlineMailOutline className='icon7'/>viitpuneofficial.com</a></li>
            <li>
                <a><FaSquarePhone className='icon8'/> 020-26950200 / 400</a></li>
        </ul>
        </div>
        <div className='about-right'>
            <img src={about_logo} alt='' className='about-img'/>
            <p><b>Vishwakarma Institute of Technology (VIT-Kondhwa)</b>, Pune, established in 2002, is a renowned engineering institute dedicated to excellence in education, research, and innovation. Accredited by NAAC with an ‘A’ grade and NBA-certified, VIIT offers top-notch undergraduate, postgraduate, and doctoral programs.</p>
            <p>With state-of-the-art infrastructure, experienced faculty, and a strong focus on industry collaborations, VIIT provides students with exceptional learning opportunities. Our vibrant campus hosts various technical, cultural, and social clubs, fostering holistic development.</p>
            <p>Committed to shaping future leaders and innovators, VIIT prides itself on academic excellence, cutting-edge research, and a strong placement record.</p>
            <p><b>Our Vision:</b>
            To be a globally renowned institute in engineering and technology education that nurtures competent, ethical, and socially responsible engineers.<br />
            <br />
            <b>Our Mission:</b>
            To impart quality technical education and develop a spirit of inquiry and creativity in students.
            To establish a collaborative environment with industry and research organizations for innovation and real-world problem-solving.
            To instill ethical values, teamwork, and a commitment to society in all our graduates.</p>
        </div>
    </div>
    </section>
  )
}

export default About
