import React from 'react'
import './Blogs.css'
import projectImg from '../../../public/Images/blog.webp'
import projectImg1 from '../../../public/Images/blog1.webp'
import projectImg2 from '../../../public/Images/blog2.webp'
import { FaArrowRightLong } from "react-icons/fa6";

const Blogs = () => {
    return (
        <>
            <div className="blogs-main container">
                <div className="project-heading">
                    <h2>Recent Blogs</h2>
                    <p>We put your ideas and thus your wishes in the form of a unique web project that <br />inspires you and you customers.</p>
                </div>
                <div className='all-blogs'>
                    <div data-aos="fade-up" className="blog">
                        <div className="project-img">
                            <img src={projectImg2} alt="" />
                        </div>
                        <div className="blog-details">
                            <div>
                                <p>10 May 2024</p>
                                <h2>The Role of Technology in Modern...</h2>
                            </div>
                            <div>
                                {/* <FaArrowRightLong className='project-icon' /> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="blog">
                        <div className="project-img">
                            <img src={projectImg1} alt="" />
                        </div>
                        <div className="blog-details">
                            <div>
                                <p>10 May 2024</p>
                                <h2>The services provide for design</h2>
                            </div>
                            <div>
                                {/* <FaArrowRightLong className='project-icon' /> */}
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="blog">
                        <div className="project-img">
                            <img src={projectImg} alt="" />
                        </div>
                        <div className="blog-details">
                            <div>
                                <p>10 May 2024</p>
                                <h2>Digital Marketo to Their New Office.</h2>
                            </div>
                            <div>
                                {/* <FaArrowRightLong className='project-icon' /> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Blogs