import * as S from './Cart.styles';
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import images from "../../../public/images";

const Cart = ({isNumberToCart, isCartItem, setIsCartItem}) => {
    const [isCart, setIsCart] = useState(false);
    const toggle = () => {
        setIsCart(!isCart);
    }
    
    return (
        <>
            <S.Cart onClick={(toggle)}>
                <Image src={images.iconCart} alt="icon-cart"/>
                {isNumberToCart != 0
                    ? 
                    <S.CartNumber>{isCartItem.map(e => e.isQuantity)}</S.CartNumber> 
                    : 
                    null 
                }
            </S.Cart>

            <AnimatePresence>
                {isCart && (
                    <S.CartContainer
                        initial={{ x: 200, opacity: 0 }}
                        transition={{ type: "spring" }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 200, opacity: 0 }}
                        style={{
                            display: isCart ? "block" : "none"
                        }}
                    >
                        {isCartItem.length == 0 ?
                            <S.EmptyCart>
                                <S.CartTitle>Cart</S.CartTitle>
                                <S.CartLine></S.CartLine>
                                <S.CartBody>
                                    <S.CartMessage>Your cart is empty.</S.CartMessage>
                                </S.CartBody>
                            </S.EmptyCart>
                            :
                            <>
                                {isCartItem.map(e =>
                                    <S.NotEmptyCartContainer key={e.id}>
                                        <S.CartTitle>Cart</S.CartTitle>
                                        <S.CartLine></S.CartLine>

                                        <S.ProductPriceInfo>
                                            <S.CartBody>
                                                <S.ProductImage>
                                                    <Image src={images.imageProductOneThumbnail} width={50} height={50} alt="image-product"/>
                                                </S.ProductImage>
                                                <S.Content>
                                                    <S.ProductName>Autumn Limited Edition...</S.ProductName>
                                                    ${e.price.toFixed(2)} x {e.isQuantity} 
                                                    <S.TotalPrice>${(e.price * e.isQuantity).toFixed(2)}</S.TotalPrice>
                                                </S.Content>
                                                <S.DeleteItem>
                                                    <Image src={images.iconDelete} 
                                                        onClick={()=> setIsCartItem(isCartItem.filter( i => i.id != e.id))}
                                                        width={13} height={13}
                                                        alt="icon-delete"
                                                    />
                                                </S.DeleteItem>
                                            </S.CartBody>
                                            
                                        </S.ProductPriceInfo>

                                        <S.CheckoutBtn>
                                            Checkout
                                        </S.CheckoutBtn>
                                    </S.NotEmptyCartContainer>                              
                                )}
                                
                            </>
                        }
                    </S.CartContainer>
                )}
            </AnimatePresence>
        </>
    )
}

export default Cart
