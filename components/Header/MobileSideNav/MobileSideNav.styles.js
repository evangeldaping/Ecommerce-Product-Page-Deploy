import styled from 'styled-components';
import { devices } from '../../../styles/devices';
import { motion } from "framer-motion";

export const TopNav = styled.ul`
    display: none;

    @media ${devices.tablet} {
        display: flex;
    }
`;

export const NavLink = styled.li`
    list-style-type: none;
    margin-right: 30px;
    color: var(--dark-grayish-blue);
    height: 50px;

    &:after {
        content: ""; /* This is necessary for the pseudo element to work. */ 
        display: block; /* This will put the pseudo element on its own line. */
        width: 0%; /* Change this to whatever width you want to have before hover. */
        padding-top: 37px; /* This creates some space between the element and the border. */
        border-bottom: 5px solid var(--orange); /* This creates the border. Replace black with whatever color you want. */
        transition: .5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
    }

    &:hover:after {
        width: 100%; /* This will be the new width of your border when on hover */
    }
`;

export const MobileSideNav = styled.div`
    background: var(--white);
    width: 70%;
    height: 100%;
    padding: 1rem;
    font-weight: 700;

    ${TopNav} {
        display: flex;
        flex-direction: column;
    }

    ${NavLink} {
        &:after {
            content: ""; /* This is necessary for the pseudo element to work. */ 
            display: block; /* This will put the pseudo element on its own line. */
            width: 0%; /* Change this to whatever width you want to have before hover. */
            padding-top: 10px; /* This creates some space between the element and the border. */
            border-bottom: 5px solid var(--orange); /* This creates the border. Replace black with whatever color you want. */
            transition: .5s; /* This establishes the amount of time in seconds the animation should take from start to finish */
        }

        &:hover:after {
            width: 100%;
        }
    } 

    @media ${devices.tablet} {
        display: none;
    }
`;

export const IconClose = styled.image`
    cursor: pointer;
`;

export const MobileSideNavContainer = styled(motion.nav)`
    display: unset;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 9;

    @media ${devices.tablet} {
        display: none;
    }
`;