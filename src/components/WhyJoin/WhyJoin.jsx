import React from 'react'
import { useRef } from "react";
import './WhyJoin.css'
import {motion, useInView} from "framer-motion"
import grow from "../../assets/grow.webp"

const variants = {
    initial: {
      x: -500,
      y: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };


const WhyJoin = () => {
    const ref = useRef();

    const isInView = useInView(ref, { margin: "-100px" });
  return (
    <div >
    <motion.div className='joint' variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}>
        <motion.div className='joinCon' variants={variants}>
            <p>Focus on helping your talent grow
                <br/> and move forward
            </p>
                <hr/>
    </motion.div>
    <motion.div className='titleCon' variants={variants}>
        <div className='service'>
            <img src={grow} alt=''/>
            <h1>
            <motion.b whileHover={{color:"orange"}}>Why should</motion.b> you
            </h1>
        </div>
        <div className='service'>
            <h1>
            <motion.b whileHover={{color:"orange"}}>Consider</motion.b> joining clubs?
            </h1>
        </div>
    </motion.div>
    <motion.div className='listCon' variants={variants}>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Ignite Passion</h2>
            <p>
            Discover what drives you and fuel your enthusiasm. The club provides aspace to explore your interests, take on exciting challenges, and stay motivated through shared experiences and activities
            </p>
        </motion.div>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Build Connection</h2>
            <p>Joining the club allows you to meet like-minded individual who share your interests and values. It’s a space to form meaningful relationships, collaborate, and create a strong sense of community</p>
        </motion.div>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Achieve Together</h2>
            <p>The club is all about teamwork and collective success. By working with others, you’ll accomplish goals that might seem impossible alone, celebrating shared victories and learning from each other along the way</p>
        </motion.div>
        <motion.div className='box' whileHover={{ background: "lightgray", color: "black" }}>
            <h2>Empower Ideas</h2>
            <p>Your ideas matters, and the club provides a platform to bring them to life. Whether it’s through brainstorming, feedback, or execution, you’ll have the support and resources to turn your visions into reality</p>
        </motion.div>
    </motion.div>
    </motion.div>
    </div>
  )
}

export default WhyJoin;
