import styled from 'styled-components';
import { motion } from "framer-motion";
import { devices } from '../../../../styles/devices';

export const S = {
    GalleryContainer: styled(motion.div)`
        display: unset;
        background: rgba(0, 0, 0, .8);
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9;
        display: flex;
        flex-direction: column;
        justify-content: center;
    `,    

    Slider: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,

    CloseLighBoxGallery: styled.div`
        display: flex;
        margin-left: auto;
        margin-right: 33%;
    `,

    IconCloseGallery: styled.div`
        display: flex;
        margin-bottom: 20px;
        cursor: pointer;

        &:hover {
            transition: .5s;
            filter: invert(53%) sepia(93%) saturate(1577%) hue-rotate(347deg) brightness(100%) contrast(102%);
        }
    `,

    ImagesContainer: styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `,

    SlidesBigImagesWrapper: styled.div`
        display: flex;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        scroll-behavior: smooth;
        width: 36%;
        overflow: hidden;
        border-radius: 10px;
    `,

    ArrowContainer: styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
    `,

    Previous: styled.button`
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
        border: none;
        left: 10px;

        &:hover {
            filter: invert(53%) sepia(93%) saturate(1577%) hue-rotate(347deg) brightness(100%) contrast(102%);
        }

        @media ${devices.mobileS} {
            left: 99px;
        }

        @media ${devices.mobileM} {
            left: 99px;
        }
        
        @media ${devices.tablet} {
            left: 225px;
        }

        @media ${devices.laptop} {
            left: 430px;
        }
    `,

    Next: styled.button`
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
        border: none;
        right: 10px;

        &:hover {
            filter: invert(53%) sepia(93%) saturate(1577%) hue-rotate(347deg) brightness(100%) contrast(102%);
        }

        @media ${devices.mobileS} {
            right: 99px;
        }

        @media ${devices.mobileM} {
            right: 99px;
        }
        
        @media ${devices.tablet} {
            right: 225px;
        }

        @media ${devices.laptop} {
            right: 430px;
        }
    `,

    SlideBigImageGallery: styled.div`
        display: flex;
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
    `,

    SmallImagesWrapper: styled.div`
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 40%;
        margin-top: 20px;
    `,

    SmallImagesGallery: styled.div`
        border-radius: 15%;
        overflow: hidden;
        
        &:hover { 
            opacity: .5;
        }
    `,
}
