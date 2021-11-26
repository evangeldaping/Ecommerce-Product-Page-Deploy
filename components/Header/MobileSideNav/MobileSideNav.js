import * as S from './MobileSideNav.styles';
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import images from "../../../public/images";
import Link from "next/link";

const MobileSideNav = ({isMobileSideNav, setIsMobileSideNav, navLinks}) => {
    return (
        <>
            <AnimatePresence>
                {isMobileSideNav && (
                <S.MobileSideNavContainer
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ type: "tween" }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                >
                    <S.MobileSideNav>
                        <S.IconClose onClick={() => setIsMobileSideNav(false)}>
                            <Image src={images.iconClose} alt="icon-close"/>
                        </S.IconClose>
                        <S.TopNav>
                            {navLinks.map((navLink, index) => (
                                <Link key={index} href="/" passHref={true}>
                                    <S.NavLink>{navLink}</S.NavLink>
                                </Link>
                            ))}
                        </S.TopNav>
                    </S.MobileSideNav>
                </S.MobileSideNavContainer>
                )}
            </AnimatePresence>
        </>
    )
}

export default MobileSideNav
