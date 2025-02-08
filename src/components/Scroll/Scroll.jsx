import { useRef } from "react";
import "./Scroll.css";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import scroll1 from "../../assets/scroll1.webp";
import scroll2 from "../../assets/scroll2.webp";
import scroll3 from "../../assets/scroll3.webp";
import scroll4 from "../../assets/scroll4.webp";

const items = [
  {
    id: 1,
    title: "You Will Learn How to Work With A Team",
    img: scroll1,
    desc: "Being part of a college club helps you collaborate with others, learn teamwork, and improve your communication and leadership skills, which are essential for future careers.",
  },
  {
    id: 2,
    title: "You Will Get Networking Opportunities",
    img: scroll2,
    desc: "College clubs provide opportunities to meet new people, including students, professors, and professionals. These connections can lead to internships, job opportunities, and valuable career advice.",
  },
  {
    id: 3,
    title: "You Will Expand Your Resume",
    img: scroll3,
    desc: "Participation in college clubs demonstrates your involvement, initiative, and skills outside the classroom, making you stand out to employers and adding depth to your resume.",
  },
  {
    id: 4,
    title: "You Will Have Fun",
    img: scroll4,
    desc: "College clubs often host fun activities, events, and social gatherings, allowing you to enjoy your time while pursuing your passions and making lasting memories with friends.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 0], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Scroll = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Reasons to Join Clubs</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Scroll;
