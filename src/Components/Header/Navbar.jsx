import React, { useState } from 'react'
import logo from '../../assets/Images/bajiinfotech logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";




const Navbar = () => {

    const [menu, SetMenu] = useState(false)

    return (
        <>
            <header className='header-main container'>
                <div className="logo">
                    <img src={logo} alt="" />
                    {/* <Link to="mailto:shaikbaji395@gmail.com">shaikbaji@gmail.com</Link> */}
                </div>
                <div className={`nav-links ${menu ? "active" : "inactive"}`}>
                    <ul>
                        <li> <Link to="/services">Services</Link></li>
                        <li><Link to="https://cricpoint.in" target='blank'>Works</Link></li>
                        <Link><li>Resume</li></Link>
                        <Link>
                            <li>Skills</li>
                        </Link>
                        <Link>
                            <li>Testimonials</li>
                        </Link>
                        <Link>
                            <li>Contact</li>
                        </Link>
                        <Link>
                            <li className='hire-me-btn'>Hire_me!</li>
                        </Link>
                        {/* <li className='hire-me-btn'>Hire me!</li> */}
                    </ul>
                </div>
                <div className='hamburger' onClick={()=>{SetMenu(!menu)}}>
                    {!menu ? <GiHamburgerMenu /> : <RxCross2 />}
                </div>


            </header>
        </>
    )
}

export default Navbar;