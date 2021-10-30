/*
*Title: Services Component
*Description: Services page component
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

// Dependencies
import { motion } from 'framer-motion';
import React from 'react';
import { animationThree } from '../Animations/Animations';
import Banner from '../components/Banner';
import Header from '../components/Header';
import jelllyfish from '../images/jelllyfish.jpg';




//  Main Component (using react)
const Services = () => {
    return (
        <motion.div
            initial="out"
            animate="end"
            exit="out"
            variants={animationThree}
        >
            <Header/>
            <Banner image={jelllyfish} title="Services" desc="This is services description"/>
            Services
        </motion.div>
    );
};

//  Exporting main component
export default Services;