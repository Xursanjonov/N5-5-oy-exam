import React, { memo } from 'react'
import Slider from 'react-slick';

import HomeHeroImg from '../../../assets/icons/HomeHeroImg'
// slider style
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../home.scss'

const HomeHeroSlider = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundColor: "black", borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", backgroundColor: "black", borderRadius: '50%' }}
                onClick={onClick}
            />
        );
    }
    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="slider-container">
            <Slider {...settings} className='slider'>
                <div className='carusel-cart'>
                    <HomeHeroImg style={{margin:'0, auto'}} />
                </div>
                <div className='carusel-cart'>
                    <HomeHeroImg />
                </div>
            </Slider>
        </div>
    )
}

export default memo(HomeHeroSlider)