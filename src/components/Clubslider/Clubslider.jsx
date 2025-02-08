import React, { useState } from 'react';
import './Clubslider.css';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import club_1 from '../../assets/club1.jpg';
import club_2 from '../../assets/club2.jpg';
import club_3 from '../../assets/club3.jpg';
import club_4 from '../../assets/club4.jpg';
import club_5 from '../../assets/club5.jpg';
import club_6 from '../../assets/club6.jpg';
import club_7 from '../../assets/club7.jpg';
import club_8 from '../../assets/club8.jpg';
import club_9 from '../../assets/club9.jpg';

const Title = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const clubs = [
    { image: club_1, title: "Student Empowerment Cell", subtitle: "SEC, VIT" },
    { image: club_2, title: "Vishwa Racers", subtitle: "VISHWA RACERS" },
    { image: club_3, title: "Rotaract Club", subtitle: "RC, VIT" },
    { image: club_4, title: "Sports", subtitle: "SPORTS" },
    { image: club_5, title: "Entrepreneurship Development Cell", subtitle: "EDC, VIT" },
    { image: club_6, title: "Aavishkar Club", subtitle: "AAVISHKAR" },
    { image: club_7, title: "National Service Scheme", subtitle: "NSS, VIT" },
    { image: club_8, title: "Electronics Engineering Student Association", subtitle: "EESA, VIT" },
    { image: club_9, title: "Institute of Electrical and Electronics Engineers", subtitle: "IEEE, VIT" },
  ];

  const totalSlides = Math.ceil(clubs.length / 3); // Total number of slides

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides); // Loop to the first slide after the last
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides); // Loop to the last slide from the first
  };

  return (
    <section id="Clubslider">
    <div className="slider" id='Clubslider'>
      <div className="club">
        <p>Our Clubs?</p>
        <h1>VIT has many Technical, Cultural, Social Clubs</h1>
      </div>
      <button className="next-btn" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      <button className="back-btn" onClick={nextSlide}>
        <FaChevronRight />
      </button>
      <div className="clubslider">
        <ul style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {clubs.map((club, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={club.image} alt={club.title} />
                  <h3>{club.title}</h3>
                  <span>{club.subtitle}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </section>
  );
};

export default Title;
