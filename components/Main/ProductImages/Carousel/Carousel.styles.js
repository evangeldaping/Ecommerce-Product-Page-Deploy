import styled from 'styled-components';
import { devices } from '../../../../styles/devices';

export const S = {
    Slider: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,

    ArrowContainer: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    Previous: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background: var(--white);
        border-radius: 30px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 2;
        left: 30px;
        top: 150px;

        &:hover {
            filter: invert(53%) sepia(93%) saturate(1577%) hue-rotate(347deg) brightness(100%) contrast(102%);
        }

        @media ${devices.mobileS} {
            top: 230px;
        }

        @media ${devices.mobileM} {
            top: 250px;
        }

        @media ${devices.mobileL} {
            top: 310px;
        }

        @media ${devices.tablet} {
            display: none;
        }
    `,

    Next: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        background: var(--white);
        border-radius: 30px;
        width: 40px;
        height: 40px;
        cursor: pointer;
        z-index: 2;
        right: 30px;
        top: 150px;

        &:hover {
            filter: invert(53%) sepia(93%) saturate(1577%) hue-rotate(347deg) brightness(100%) contrast(102%);
        }

        @media ${devices.mobileS} {
            top: 230px;
        }

        @media ${devices.mobileM} {
            top: 250px;
        }

        @media ${devices.mobileL} {
            top: 310px;
        }

        @media ${devices.tablet} {
            display: none;
        }
    `,

    SlidesBigImagesWrapper: styled.div`
        display: flex;
        align-items: center;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        width: 100%;
        overflow: hidden;

        @media ${devices.mobileS} {
            width: 96%;
            min-width: 400px;
        }

        @media ${devices.mobileM} {
            width: 93%;
        }
        
        @media ${devices.tablet} {
            border-radius: 10px;
            width: 70%;
        }

        @media ${devices.laptop} {
            width: 64%;
        }

        @media ${devices.desktop} {
            width: 50%;
        }
    `,

    SlideBigImage: styled.div`
        display: flex;
        align-items: center;
        scroll-snap-align: start;
        flex-shrink: 0;
        width: 100%;
        align-content: center;
        align-items: center;
        transform-origin: center center;
        transform: scale(1);
        transition: transform 0.5s;
        position: relative;
        overflow: hidden;

        @media ${devices.tablet} {
            cursor: pointer;
        }
    `,

    SmallImagesWrapper: styled.div`
        display: none;

        @media ${devices.tablet} {
            display: flex;
            justify-content: space-around;
            align-items: center;
            width: 70%;
            margin-top: 20px;
        }
    `,

    SmallImage: styled.div`
        border-radius: 15%;
        overflow: hidden;

        &:hover { 
            opacity: .5;
        }
    `,
}
