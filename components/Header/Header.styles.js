import styled from 'styled-components';
import { devices } from '../../styles/devices';

export const Container = styled.div`
    height: 100%;
`;

export const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
`;

export const ContentLeft = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
`;

export const MobileMenu = styled.image`
    display: flex;

    @media ${devices.tablet} {
        display: none;
    }
`;

export const Logo = styled.div`
    padding-left: 20px;
    
    @media ${devices.tablet} {
        margin-top: -25px;
    }
`;

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

export const ContentRight = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    height: 100%;

    @media ${devices.tablet} {
        margin-top: -25px;
    }
`;

export const Avatar = styled.image`
    margin-left: 20px;
    height: 30px;
    width: 30px;

    &:hover{
        border-radius: 100%;
        border: 2px solid var(--orange);
    }

    @media ${devices.tablet} {
        height: 40px;
        width: 40px;
    }
`;

export const Line = styled.div`
    display: none;

    @media ${devices.tablet} {
        border-bottom: 2px solid var(--grayish-blue);
        margin: -25px 25px 0 40px;
        display: block;
        opacity: 20%;
    }
`;