/*
*Title: Home Page 
*Description: Home page Component.
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

//  Dependencies
import { motion } from 'framer-motion';
import React from 'react';
import { animationOne, transition } from '../Animations/Animations';
import Banner from '../components/Banner';
import Header from '../components/Header';
import pullies from '../images/pullies.jpg';


//  Main Component (using react)
const Home = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
        >
            <Header/>
            <Banner image={pullies} title="Home" desc="This is home description"/>
        </motion.div>
    );
};

//  Exporting main component
export default Home;