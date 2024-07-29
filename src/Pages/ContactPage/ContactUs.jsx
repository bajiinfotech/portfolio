import React from 'react'
import Contact from '../../Components/Contact/Contact'
import { FiPhoneCall } from "react-icons/fi";

import './ContactUs.css'
import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        <>
            <div className="container contactUs">
                <div className="contact-form-page">
                    <Contact />
                </div>
                <div className="contact-details">

                    <div className="details1">
                        <div>
                            <FiPhoneCall className='form-icon' />
                        </div>
                        <div>
                            <h6>Phone</h6>
                            <Link>+91 770 2968 572</Link>
                        </div>
                    </div>
                    <div className="details1">
                        <div>
                            <FiPhoneCall className='form-icon' />
                        </div>
                        <div>
                            <h6>Email</h6>
                            <Link>shaikbaji395@gmail.com</Link>
                        </div>
                    </div>
                    <div className="details1">
                        <div>
                            <FiPhoneCall className='form-icon' />
                        </div>
                        <div>
                            <h6>Address</h6>
                            <Link>Hyderabad, Telangana, 500039</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs