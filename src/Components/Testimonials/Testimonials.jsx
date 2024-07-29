import React from 'react'
import './Testimonials.css'
import Carousel from './Carousel'

const Testimonials = () => {
    return (
        <>
            <div className='container'>
                <div className='testimonial-main'>

                    <div className="testimonial-row1">
                        <h2>My Client's Stories</h2>
                        <p>Empowering people in new a digital journey with my super services</p>
                    </div>
                    <div className="testimonial-row2">
                        <div className="testimonial-card">
                            <Carousel />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials