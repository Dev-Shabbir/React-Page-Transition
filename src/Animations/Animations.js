/*
*Title: Animation Handler
*Description: A container of animation property and transition object.
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

// Transitions
export const transition = {
    duration: 0.4,
};



//  Home page animation
export const animationOne = {
    in: {
        opacity: 1
    },
    out: {
        opacity: 0
    }
};


//  About page animation
export const animationTwo = {
    in: {
        opacity: 1,
        y: 0,
        scale:1
    },
    out: {
        opacity: 0,
        y: '-100vh',
        scale: 0.3
    }
};


//  Service page animation
export const animationThree = {
    in:{
        opacity: 1,
        x: -300
    },
    out:{
        opacity: 0,
        x: 300
    },
    end: {
        opacity: 1,
        x: 0
    }
};

