import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.css';
import Hero from "./components/Hero/Hero";
import Title from "./components/Title/Title";
import Programs from "./components/Programs/Programs";
import Clubslider from "./components/Clubslider/Clubslider";
import About from "./components/About/About";
import Titles from "./components/Titles/Titles";
import Contact from "./components/Contact/Contact";
import Contitle from "./components/Contitle/Contitle";
import Footer from "./components/Footer/Footer";
import WhyJoin from "./components/WhyJoin/WhyJoin";
import Scroll from "./components/Scroll/Scroll";
import LoginSignup from "./components/LoginSignup/LoginSignup";


const App = () => {
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <Navbar />
                            <Hero />
                            <Title />
                            <Programs />
                            <Clubslider />
                            <Titles />
                            <About />
                            <Contitle />
                            <Contact />
                            <Footer />
                        </>
                    }
                />
                <Route path="/WhyJoin" element={<><WhyJoin /><Scroll /></>} />
                <Route path="/LoginSignup" element={<LoginSignup />} />
            </Routes>
        </Router>
    );
};

export default App;
