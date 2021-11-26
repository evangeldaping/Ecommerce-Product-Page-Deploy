import styled from 'styled-components';
import { motion } from "framer-motion";
import { devices } from '../../../styles/devices';

export const CartContainer = styled(motion.nav)`
        display: flex;
        flex-direction: column;
        justify-content: center;
        background-color: var(--light-grayish-blue);
        box-shadow: 1px 12px 30px 0px var(--grayish-blue);
        border-radius: 10px;
        margin: auto;
        min-height: 260px;
        position: absolute;
        top: 80px;
        right: 0px;
        left: 0px;     
        z-index: 5;

        @media ${devices.mobileS} {
            margin-right: 5px;
            width: 360px;
        }

        @media ${devices.mobileL} {
            margin-right: 100px;
        }

        @media ${devices.tablet} {
            top: 100px;
        }
`;

export const Cart = styled.div`
    position: relative;
    bottom: 2px;
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
    font-weight: 300px;
    margin: auto;
    text-align: center;
`;

export const CartTitle = styled.h1`
    font-size: 20px;
    margin-left: 20px;
    text-align: left;
`;

export const CartLine = styled.div`
    border-bottom: 2px solid var(--dark-grayish-blue);
    opacity: 0.1;
`;

export const CartBody = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ProductImage = styled.div`
`;

export const Content = styled.div`
    margin-left: 20px;
    font-size: 15px;
`;

export const CartMessage = styled.h2`
    font-size: 25px;
    color: var(--dark-grayish-blue);
    margin: auto;
    margin-top: 60px;
`;

export const NotEmptyCartContainer = styled.div`
`;

export const CartNumber = styled.div`
    position: absolute;
    top: -5px;
    right: 0px;
    left: 10px;
    width: 19px;
    height: 13px;
    background-color: var(--orange);
    border-radius: 7px;
    text-align: center;
    color: white;
    font-size: 10px;
    z-index: 1;
`;

export const ProductPriceInfo = styled.div`
    display: flex;
    align-content: center;
    align-items: center;
    padding: 20px;
`;

export const ProductName = styled.h1`
    color: var(--dark-grayish-blue);
    font-size: 15px;
`;

export const TotalPrice = styled.b`
    color: var(--black);
    margin-left: 10px;
`;

export const DeleteItem = styled.h1`
    margin-left: 50px;
`;

export const CheckoutBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 90%;
    min-height: 56px;
    border-radius: 15px;
    border: none;
    cursor: pointer;
    background-color: var(--orange);
    color: white;
    font-weight: bold;
    font-size: 15px;

    &:hover{
        opacity: .5;
    }
`;