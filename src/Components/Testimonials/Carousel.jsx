import React from 'react'
import './Carousel.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1
    };
    return (
        <>
            <div className=''>
                <div className="carousel-main">
                    <Slider {...settings}>
                        {data.map((d) => (
                            <div key={d.name} className="carousel-card">
                                <div className='carousel-image'>
                                    <p>Company</p>
                                    <img src={d.img} alt="" />
                                </div>

                                <div className="carosel-details">
                                    <p>{d.review}</p>
                                    <h3>{d.name}</h3>
                                    <p>{d.position}</p>
                                    {/* <button>Read More</button> */}
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </>
    )
}


const data = [
    {
        name: `John Morgan`,
        img: `/Carousel/John_Morgan.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position: 'Software Developer'
    },
    {
        name: `Ellie Anderson`,
        img: `/Carousel/Ellie_Anderson.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position: 'Software Developer'
    },
    {
        name: `Nia Adebayo`,
        img: `/Carousel/Nia_Adebayo.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position: 'Software Developer'
    },
    {
        name: `Rigo Louie`,
        img: `/Carousel/Rigo_Louie.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position: 'Software Developer'
    },
    {
        name: `Mia Williams`,
        img: `/Carousel/Mia_Williams.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        position: 'Software Developer'
    },

];

export default Carousel