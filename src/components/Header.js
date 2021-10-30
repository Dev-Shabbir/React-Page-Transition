/*
*Title: Header Component
*Description: Header with Navbar using react and styled-components.
*Author: Shabbir Hossain Shah
*Date: 28/10/2021
*/

//  Dependencies
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


//  Sub-Components(using styled-components)
const Navbar = styled.nav`
    height: 65px;
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const NavLogo =styled(Link)`
    color: #fff;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    font-style: italic;
`;
const NavItems = styled.div``;
const NavbarLink = styled(Link)`
    color: #fff;
    font-weght: bold;   
    text-decoration: none;
    padding: 0 1rem;
    border-radius: 10px;
    
    &:hover{
        color: #000;
        background: lightblue;
    }
`;


//  Main Component(using react)
const Header = () => {
    return (
        <>
            <Navbar>
                <NavLogo to="/">Transitions</NavLogo>
                <NavItems>
                    <NavbarLink to="/">Home</NavbarLink>
                    <NavbarLink to="/about">About</NavbarLink>
                    <NavbarLink to="/services">Services</NavbarLink>
                </NavItems>
            </Navbar>  
        </>
    );
};
 
//  Exporting main component
export default Header;