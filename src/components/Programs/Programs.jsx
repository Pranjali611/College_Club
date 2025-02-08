import React from 'react';
import './Programs.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUniversalAccess, faHandshake, faAward } from '@fortawesome/free-solid-svg-icons';

const Programs = () => {
  return (
    <section id="Program">
    <div className='programs'>
      <div className="program">
        <FontAwesomeIcon icon={faUniversalAccess} style={{ color: "#B197FC", fontSize: "47px" }} />
        <h2>Learn and Grow</h2>
        <p>Unlock your true potential with immersive, hands-on opportunities that challenge and inspire. Our skill-building programs are carefully designed to empower you with the tools, knowledge, and confidence needed to achieve your goals and succeed in any endeavor</p>
      </div>
      <div className='program'>
        <FontAwesomeIcon icon={faHandshake} style={{ color: "#B197FC", fontSize: "47px" }} />
        <h2>Be Part of a Community</h2>
        <p>Become a part of a vibrant and inclusive community of like-minded individuals who share your passions and aspirations. Together, we foster an environment of collaboration, mutual support, and encouragement, helping each other grow and achieve greatness.</p>
      </div>
      <div className='program'>
        <FontAwesomeIcon icon={faAward} style={{ color: "#B197FC", fontSize: "47px" }} />
        <h2>Shape the Future</h2>
        <p>Engage in impactful projects and initiatives that address real-world challenges and drive meaningful change. Your contributions will not only shape the future but also leave a positive and lasting impact on the lives of people and communities around the world</p>
      </div>
    </div>
    </section>
  );
}

export default Programs;
