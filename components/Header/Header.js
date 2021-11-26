import * as S from './Header.styles';
import { useState } from "react";
import Image from "next/image";
import images from "../../public/images";
import Link from "next/link";
import MobileSideNav from './MobileSideNav/MobileSideNav';
import Cart from './Cart/Cart';

const Header = ({isNumberToCart, isCartItem, setIsCartItem}) => {
    const [isMobileSideNav, setIsMobileSideNav] = useState(false);
    const navLinks = ["Collections", "Men", "Women", "About", "Contact"];
    return (
        <S.Container>
            <S.ContentWrapper>
                <S.ContentLeft>
                    <S.MobileMenu onClick={() => setIsMobileSideNav(true)}>
                        <Image src={images.iconMenu} alt="icon-menu"/>
                    </S.MobileMenu>
                    <S.Logo>
                        <Link href="/">
                            <a><Image src={images.logo} alt="logo"/></a>
                        </Link>
                    </S.Logo>
                    <S.TopNav>
                        {navLinks.map((navLink, index) => (
                            <Link key={index} href="/" passHref={true}>
                                <S.NavLink>{navLink}</S.NavLink>
                            </Link>
                        ))}
                    </S.TopNav>
                </S.ContentLeft>
                
                <S.ContentRight>
                    <Cart isNumberToCart={isNumberToCart} isCartItem={isCartItem} setIsCartItem={setIsCartItem}/>
                        
                    <S.Avatar>
                        <Image src={images.imageAvatar} alt="image-avatar"/>
                    </S.Avatar>
                </S.ContentRight>

                <MobileSideNav isMobileSideNav={isMobileSideNav} setIsMobileSideNav={setIsMobileSideNav} navLinks={navLinks} />
            </S.ContentWrapper>

            <S.Line></S.Line>
        </S.Container>
    )
}

export default Header