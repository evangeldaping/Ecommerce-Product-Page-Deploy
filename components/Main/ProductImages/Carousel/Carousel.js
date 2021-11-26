import { S } from './Carousel.styles';
import { useState } from "react";
import Image from "next/image";
import images from "../../../../public/images";
import ActiveImage from "../ActiveImage/ActiveImage";
import Lightbox from "../Lightbox/Lightbox";
import { withRouter } from 'next/router';

const imagesProduct = [
    {   id:         1,
        imageThumb: images.imageProductOneThumbnail,
        imageBig:   images.imageProductOne,
        path:       '/#1'
    },
    {   id:         2,
        imageThumb: images.imageProductTwoThumbnail,
        imageBig:   images.imageProductTwo,
        path:       '/#2' 
    },
    {   id:         3,
        imageThumb: images.imageProductThreeThumbnail,
        imageBig:   images.imageProductThree,
        path:       '/#3'
    },
    {   id:         4,
        imageThumb: images.imageProductFourThumbnail,
        imageBig:   images.imageProductFour,
        path:       '/#4'
    },
]

const Carousel = ({router}) => {
    const [isLightBoxGallery, setIsLightBoxGallery] = useState(false);  
    const [isImageCarouselPath, setIsImageCarouselPath] = useState(1) 
    return (
        <>
            <Lightbox 
                isLightBoxGallery={isLightBoxGallery}
                setIsLightBoxGallery={setIsLightBoxGallery}
                imagesProduct={imagesProduct}
                isImageCarouselPath={isImageCarouselPath}
                setIsImageCarouselPath={setIsImageCarouselPath}
            />

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

            <S.Slider>
                <S.SlidesBigImagesWrapper onClick={() => setIsLightBoxGallery(true)}>
                    {imagesProduct.map((bigImage, index)=> {
                        return (
                            <S.SlideBigImage key={index} id={bigImage.id}>
                                <Image src={bigImage.imageBig} width={700} height={700} alt={`image-big-product-${index}`} />
                            </S.SlideBigImage>
                        )
                    })}
                </S.SlidesBigImagesWrapper>

                <S.SmallImagesWrapper>
                    {imagesProduct.map((thumbImage, index)=> {
                        return (
                            <ActiveImage key={index} href={thumbImage.path} scroll={false}>
                                <S.SmallImage>
                                    <Image src={thumbImage.imageThumb} width={80} height={80} alt={`image-thumb-product-${index}`} />
                                </S.SmallImage>
                            </ActiveImage>
                        )
                    })}
                </S.SmallImagesWrapper>
            </S.Slider>
        </>
    )
}

export default withRouter(Carousel);
