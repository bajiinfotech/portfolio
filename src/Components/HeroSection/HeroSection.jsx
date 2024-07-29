import React from 'react'
import image from '../../assets/Images/hero_img.webp'
import './HeroSection.css'
import { MdOutlineFileDownload } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { IoGlobeOutline } from "react-icons/io5";
import { BiLogoGithub } from "react-icons/bi";
import History from './History';








const HeroSection = () => {
  return (
    <>
      <div className="hero-main  container">
        <div>
          <h2>I am Baji</h2>
          <h1>Web Developer + <span>UX Designer </span></h1>
          <p>I break down complex user experinece problems to <span>
            create integritiy focussed solutions that connect
          </span>
            billions of people</p>
          <div className='hero-social'>
            <div className='download-cv'>
              <button>Download CV <MdOutlineFileDownload /></button>
            </div>
            <div className='Hero-social-links'>
              <FaFacebookF className='hero-icons' />
              <TiSocialLinkedin className='hero-icons' />
              <IoGlobeOutline className='hero-icons' />
              <BiLogoGithub className='hero-icons' />
            </div>
          </div>
        </div>
        <div>
          <img src={image} alt="" />
        </div>
      </div>

      <History />

    </>
  )
}

export default HeroSection;

