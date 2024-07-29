import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import HeroSection from '../../Components/HeroSection/HeroSection'
import Services from '../../Components/Services/Services'
import Projects from '../../Components/Projects/Projects'
import Resume from '../../Components/Resume/Resume'
import Skills from '../../Components/Skills/Skills'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Blogs from '../../Components/RecentBlogs/Blogs'
import Contact from '../../Components/Contact/Contact'
import ContactUs from '../ContactPage/ContactUs'
import Footer from '../../Components/Footer/Footer'

const HomePage = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Services />
            <Projects />
            <Resume />
            <Skills />
            <Testimonials />
            <Blogs />
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default HomePage