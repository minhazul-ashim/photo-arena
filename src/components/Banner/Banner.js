import React from 'react';
import Slider from 'react-slick';
import camera from '../../images/camera.jpg'
import art from '../../images/art.jpg'
import './Banner.css'

const Banner = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    return (
        <div className='carousel-parent'>
            <Slider {...settings}>
                <div className='carousel-container'>
                    <img className='carousel-img' src={camera} alt="" />
                </div>
                <div className='carousel-container'>
                    <img className='carousel-img' src={art} alt='' />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;