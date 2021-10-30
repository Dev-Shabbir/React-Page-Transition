/*
*Title: About Component
*Description: About page component
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

// Dependencies
import { motion } from 'framer-motion';
import React from 'react';
import { animationTwo } from '../Animations/Animations';
import Banner from '../components/Banner';
import Header from '../components/Header';
import keybord from '../images/keybord.jpg';



//  Main Component (using react)
const About = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationTwo}
        >
            <Header/>
            <Banner image={keybord}title="About" desc="This is about description"/>
            About
        </motion.div>
    );
};

//  Exporting main component
export default About;