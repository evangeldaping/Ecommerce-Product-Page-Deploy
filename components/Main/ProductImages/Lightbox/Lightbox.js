import { AnimatePresence } from "framer-motion";
import { S } from './Lightbox.styles';
import images from "../../../../public/images";
import ActiveImage from "../ActiveImage/ActiveImage";
import Image from "next/image";
import useWindowSize from "./useWindowSize";
import { withRouter } from 'next/router';

const Lightbox = ({isLightBoxGallery, setIsLightBoxGallery, imagesProduct, router, isImageCarouselPath, setIsImageCarouselPath}) => {
    const {width} = useWindowSize();    
    return (
        <AnimatePresence>
            {isLightBoxGallery && width > 768 && (
                <S.GalleryContainer
                    initial={{ x: -200, opacity: 0 }}
                    transition={{ type: "spring" }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -200, opacity: 0 }}
                >
                    <S.Slider>
                        <S.CloseLighBoxGallery>
                            <S.IconCloseGallery onClick={() => setIsLightBoxGallery(false)}>
                                <Image src={images.iconClose} alt="icon-close" />
                            </S.IconCloseGallery>
                        </S.CloseLighBoxGallery>

                        <S.ImagesContainer>
                            <S.SlidesBigImagesWrapper>
                                <S.ArrowContainer>
                                    <S.Previous onClick={()=> {
                                        setIsImageCarouselPath(path => 
                                            path === 1 ? path = 4 : path -= 1
                                        )
                                        router.push(`/#${isImageCarouselPath}`, undefined, {shallow: true})
                                    }}>
                                        <Image src={images.iconPrevious} alt="icon-previous" />
                                    </S.Previous>

                                    <S.Next onClick={()=> {
                                        setIsImageCarouselPath(path => 
                                            path === 4 ? path = 1 : path += 1
                                        )
                                        router.push(`/#${isImageCarouselPath}`, undefined, {shallow: true})
                                        }}>
                                        <Image src={images.iconNext} alt="icon-next" />
                                    </S.Next>
                                </S.ArrowContainer>

                                {imagesProduct.map((bigImage, index)=> {
                                    return (
                                        <S.SlideBigImageGallery key={index} id={bigImage.id}>
                                            <Image src={bigImage.imageBig} width={700} height={700} alt={`image-big-product-${index}`} />
                                        </S.SlideBigImageGallery>
                                    )
                                })}
                            </S.SlidesBigImagesWrapper>

                            <S.SmallImagesWrapper>
                                {imagesProduct.map((thumbImage, index)=> {
                                    return (
                                        <ActiveImage key={index} href={thumbImage.path} scroll={false}>
                                            <S.SmallImagesGallery>
                                                <Image src={thumbImage.imageThumb} width={80} height={80} alt={`image-thumb-product-${index}`} />
                                                
                                            </S.SmallImagesGallery>
                                        </ActiveImage>
                                    )
                                })}
                            </S.SmallImagesWrapper>

                        </S.ImagesContainer>
                    </S.Slider>
                </S.GalleryContainer>
            )}
        </AnimatePresence>
    )
}

export default withRouter(Lightbox);
