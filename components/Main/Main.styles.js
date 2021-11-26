import styled from 'styled-components';
import { devices } from '../../styles/devices';
import { motion } from "framer-motion";

export const S = {
    Container: styled.div`
        display: flex;
        flex-direction: column;
        align-content: center;
        height: 100vh;

        @media ${devices.tablet} {
            flex-direction: row;
            padding: 80px 200px 80px 200px;
        }
    `,

    LeftContent: styled.div`
    `,

    RightContent: styled.div`
    `,

    Description: styled.div`
        padding: 20px;
    `,

    Company: styled.h1`
        font-size: 2vh;
        color: var(--orange);
        font-weight: 700;
        text-transform: uppercase;
    `,

    ProductName: styled.h2`
        font-size: 3.5vh;
        font-weight: 700;
        text-transform: capitalize;

        @media ${devices.tablet} {
            font-size: 5vh;
            margin: 0;
        }
    `,

    ProductDetails: styled.p`
        font-size: 2vh;
        font-weight: 700;
        line-height: 30px;
        color: var(--dark-grayish-blue);
    `,

    PriceDetails: styled.h1`
        display: flex;
        justify-content: space-between;

        @media ${devices.tablet} {
            flex-direction: column;
        }
    `,

    PriceContentLeft: styled.div`
        display: flex;
    `,

    Price: styled.h2`
        font-size: 3.5vh;
        font-weight: 700;

        @media ${devices.tablet} {
            margin: 0;
        }
    `,

    Percent: styled.h3`
        font-size: 2vh;
        color: var(--orange);
        background-color: var(--pale-orange);
        height: 2em;
        width: 3em;
        padding: 7px;
        border-radius: 20%;
        margin: 25px 0 0 15px;

        @media ${devices.tablet} {
            margin: 0 0 0 15px;
        }
    `,

    PriceContentRight: styled.div`
    `,

    PriceTotal: styled.h4`
        text-decoration: line-through;
        opacity: 75%;
        color: var(--grayish-blue);
        font-size: 2.5vh;

        @media ${devices.tablet} {
            margin: 0;
        }
    `,

    AddToCart: styled.div`
        display: flex;
        flex-direction: column;
        align-content: center;
        padding: 0 20px 0 20px;
        
        @media ${devices.tablet} {
            flex-direction: row;
            gap: 30px;
        }
    `,

    MinusPlus: styled.div`
        display: flex;
        justify-content: space-between;
        background-color: var(--light-grayish-blue);
        padding: 3vh;
        border-radius: 15px;
        font-weight: 700;
        
        @media ${devices.tablet} {
            width: 50%;
            height: 50%;
            margin: 0;
        }
    `,

    Minus: styled.image`
        cursor: pointer;

        &:hover {
            opacity: .5;
        }
    `,

    Plus: styled.image`
        cursor: pointer;

        &:hover {
            opacity: .5;
        }
    `,

    Button: styled.button`
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--orange);
        padding: 1vh;
        border-radius: 15px;
        margin-top: 20px;
        margin-bottom: 50px;
        cursor: pointer;
        border: none;

        &:hover{
            opacity: .5;
        }

        @media ${devices.tablet} {
            width: 100%;
            margin: 0;
        }
    `,

    ButtonCart: styled.image`
        filter: brightness(0) invert(1);
    `,

    Add: styled.h1`
        font-size: 2vh;
        padding-left: 15px;
        color: var(--white);
    `,

    AddtoCartBtn: styled.image`
        cursor: pointer;
        margin-right: 16px;
        filter: brightness(0) invert(1);
        height: 16px;
        width: 16px;
    `, 
}
