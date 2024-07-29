import React from 'react'
import './Footer.css'
import img from '../../assets/Images/bajiinfotech logo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
    <footer className="container footer-container">
        <div className="footer">
            <div className="footer-logo">
                <img src={img} alt="" />
            </div>
            <div className="footer-links">
                <p>Services</p>
                <p>Works</p>
                <p>Skills</p>
                <p>Experiance</p>
                <p>Blog</p>
            </div>
            <div className="copyright">
                <Link>@2024 All Rights Receved Baji Infotech</Link>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer