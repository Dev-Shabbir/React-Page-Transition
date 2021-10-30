/*
*Title: Banner-transition-page 
*Description: Shared component for setting the page's backgroud
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/


//  Dependencies
import React from 'react';
import styled from 'styled-components';


// Sub Components(using #styled-component)
const Section = styled.section`
    background: url(${({image})=>(image && image)}) center;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    margin-top: -60px;
`;
const Container = styled.div`
    color: #fff;
    padding: 2rem;
    backdrop-filter: blur(5px);
    background: rgba(0, 0, 0, 0.4);
    margin: 2rem;
    border-radius: 10px;

    h1{
        font-size: clamp(2rem, 8vw, 5rem);
        margin-bottom: 0.5rem; 
    }
    p{
        font-size: clamp(1rem, 6vw, 2.5rem);
        margin-bottom: 0.5rem;
    }
    button{
        font-size: clamp(0.8rem, 4vw, 1.2rem);
        padding: 0.8rem 2rem;
        color: #000;
        backgroun: lightgreen;
        background: linear-gradient(to right, red,green);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        outline: none;
    }
`;

//  Main Component (using react)
const Banner = ({image, title, desc}) => {
    return (
        <Section image={image}>
            <Container>
                <h1>{title}</h1>
                <p>{desc}</p>
                <button>Learn More</button>
            </Container>
        </Section>
    );
};

//  Exporting main component
export default Banner;