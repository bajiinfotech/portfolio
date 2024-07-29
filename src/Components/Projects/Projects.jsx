import React, { useState } from 'react'
import './projects.css'
import projectImg from '../../assets/Images/portfolio1.webp'
import projectImg2 from '../../assets/Images/portfolio2.webp'
import { FaArrowRightLong } from "react-icons/fa6";
import project1 from '../../assets/Images/project1.png'

const Projects = () => {

  const [active, setActive] = useState(1)
  const [details, setDetails] = useState(false)

  const handleClick = (id) => {
    setActive(id)

  }

  const handleDetails = () => {
    setDetails(true)
    console.log(details);
  }

  const handleDetailsout = () => {
    setDetails(false)
    console.log(details);
  }
  return (
    <>
      <div className="projects-main container">
        <div className="project-heading">
          <h2>My Recent Works</h2>
          <ul>
            <li onClick={() => handleClick(1)} >All</li>
            <li onClick={() => handleClick(2)}>HTML</li>
            <li onClick={() => handleClick(3)}>CSS</li>
            <li onClick={() => handleClick(4)}>JAVASCRIPT</li>
            <li onClick={() => handleClick(5)}>React js</li>
          </ul>
        </div>
        <div>
          {active === 1 && <div data-aos="fade-up">
            <div className='all-projects'>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>

            </div>
          </div>}
          {active === 2 && <div data-aos="fade-up">
            <div className='all-projects'>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>

            </div>
          </div>}
          {active === 3 && <div data-aos="fade-up">
            <div className='all-projects'>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>

            </div>
          </div>}
          {active === 4 && <div data-aos="fade-up">
            <div className='all-projects'>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>

            </div>
          </div>}
          
          {active === 5 && <div data-aos="fade-up">
            <div className='all-projects'>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>
              <div data-aos="fade-up" className="project">
                <div className="project-img">
                  <img src={projectImg} alt="" />
                </div>
                <div className="project-details">
                  <div>
                    <h2>this is an html project</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <div>
                    <FaArrowRightLong className='project-icon' />
                  </div>
                </div>
              </div>

            </div>
          </div>}
         
          


          
        </div>




      </div>

    </>

  )
}

export default Projects