import React from 'react'
import './Services.css'
import { FaArrowRightLong } from "react-icons/fa6";


const Services = () => {
    return (
        <>
            <div className="services-main container">
                <div className='services-heading'>
                    <h2>My Quality Services</h2>
                    <p>We put your ideas and thus your wishes in the form of a unique web project that <br /> inspires you and you customers.</p>
                </div>
                <div  className='service-items'>
                    <div className="services-item">
                        <div className='services-item-heading'>
                        <h2>01 Web Design</h2>
                        </div>
                        <div>
                            <p>I break down complex user experinece problems to create <br /> integritiy focussed solutions that connect billions of people</p>
                        </div>
                        <div>
                        <FaArrowRightLong className='services-item-icon' />
                        </div>
                    </div>
                    <div className="services-item">
                        <div className='services-item-heading'>
                        <h2>02 UI/UX Design</h2>
                        </div>
                        <div>
                            <p>I break down complex user experinece problems to create <br /> integritiy focussed solutions that connect billions of people</p>
                        </div>
                        <FaArrowRightLong className='services-item-icon' />
                    </div>
                    <div className="services-item">
                        <div className='services-item-heading'>
                        <h2>03 SEO</h2>
                        </div>
                        <div>
                            <p>I break down complex user experinece problems to create <br /> integritiy focussed solutions that connect billions of people</p>
                        </div>
                        <FaArrowRightLong className='services-item-icon' />
                    </div>
                    <div className="services-item">
                        <div className='services-item-heading'>
                        <h2>03 Digital Marketing</h2>
                        </div>
                        <div>
                            <p>I break down complex user experinece problems to create <br /> integritiy focussed solutions that connect billions of people</p>
                        </div>
                        <FaArrowRightLong className='services-item-icon' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services