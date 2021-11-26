import { S } from './Main.styles';
import { useState } from "react";
import Image from "next/image";
import images from "../../public/images";
import ProductImages from './ProductImages/index';

const Main = ({isSetNumberToCart, isCartItem, setIsCartItem}) => { 
    const [isQuantity, setIsQuantity] = useState(0)
    
    const addToCartArray = (cartArrayParam) => {
        const Obj = {
            id: 1,
            isQuantity: isQuantity,
            price: 125.00,
            total: isQuantity * 125.00,
        };

        const tempArr = cartArrayParam.find(e => e.id === Obj.id)

        if(cartArrayParam.length > 0 && tempArr){
            tempArr.isQuantity += isQuantity;
            const NewArr = cartArrayParam.map(e => e.id === Obj.id ? tempArr : e)
            return NewArr;
        }
        
        if(cartArrayParam.length === 0 || !tempArr){
            cartArrayParam.push(Obj)
        }
        
        return cartArrayParam;
    }

    return (
        <S.Container>
            <S.LeftContent>
                <ProductImages/>
            </S.LeftContent>
            
            <S.RightContent>
                <S.Description>
                    <S.Company>sneaker company</S.Company>
                    <S.ProductName>fall limited edition sneakers</S.ProductName>
                    <S.ProductDetails>
                        These low-profile sneakers are your perfect
                        casual wear companion. Featuring a durable
                        rubber outer sole, they&apos;ll withstand everything
                        the weather can offer.
                    </S.ProductDetails>
                    <S.PriceDetails>
                        <S.PriceContentLeft>
                            <S.Price>$125.00</S.Price>
                            <S.Percent>50%</S.Percent>
                        </S.PriceContentLeft>
                        <S.PriceContentRight>
                            <S.PriceTotal>$250.00</S.PriceTotal>
                        </S.PriceContentRight>
                    </S.PriceDetails>
                </S.Description>
                <S.AddToCart>
                    <S.MinusPlus>
                        <S.Minus onClick={()=> isQuantity !=0 ? setIsQuantity(isQuantity-1) : 0}>
                            <Image src={images.iconMinus} alt="icon-minus"/>
                        </S.Minus>
                            {isQuantity}
                        <S.Plus onClick={()=> setIsQuantity(isQuantity+1)}>
                            <Image src={images.iconPlus} alt="icon-plus"/>
                        </S.Plus>
                    </S.MinusPlus>
                    <S.Button>
                        <S.ButtonCart>
                            <Image src={images.iconCart} width={15} height={15} alt="icon-cart"/>
                        </S.ButtonCart>
                        <S.Add onClick={()=>{
                            isQuantity === 0
                            ?
                            alert("Nothing to add.")
                            :
                            
                                (setIsCartItem(addToCartArray(isCartItem)),
                                isSetNumberToCart(e => e += 1)),
                                setIsQuantity(0)
                            }}>
                            <S.AddtoCartBtn src={images.iconCart} alt="cart-icon"/>
                            Add to cart
                        </S.Add>
                    </S.Button>
                </S.AddToCart>
            </S.RightContent>            
        </S.Container>
    )
}

export default Main
