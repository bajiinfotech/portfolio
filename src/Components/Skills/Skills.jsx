import React from 'react'
import './Skills.css'
import wp from '../../assets/Images/wp.webp'
import js from '../../assets/Images/js.webp'
import react from '../../assets/Images/react.webp'
import figma from '../../assets/Images/figma.webp'
import github from '../../assets/Images/github.png'

const Skills = () => {
    return (
        <>
            <div className='skills-main container'>
                <div className="skills-heading">
                    <h2>My Skills</h2>
                    <p>We put your ideas and thus your wishes in the form of a unique web project <br /> that inspires you and you customers.</p>
                </div>

                <div className="skills">
                    <div>
                        <div className="skill-item">
                            <div className="skill-img">
                                <img src={figma} alt="" />
                            </div>
                        </div>
                        <div className="skill-name">
                            <h4>Figma</h4>
                        </div>
                    </div>
                    <div>
                        <div className="skill-item">
                            <div className="skill-img">
                                <img src={github} alt="" />
                            </div>
                        </div>
                        <div className="skill-name">
                            <h4>Github</h4>
                        </div>
                    </div>

                    <div>
                        <div className="skill-item">
                            <div className="skill-img">
                                <img src={wp} alt="" />
                            </div>
                        </div>
                        <div className="skill-name">
                            <h4>Wordpres</h4>
                        </div>
                    </div>

                    <div>
                        <div className="skill-item">
                            <div className="skill-img">
                                <img src={js} alt="" />
                            </div>
                        </div>
                        <div className="skill-name">
                            <h4>Javascript</h4>
                        </div>
                    </div>
                    <div>
                        <div className="skill-item">
                            <div className="skill-img">
                                <img src={react} alt="" />
                            </div>
                        </div>
                        <div className="skill-name">
                            <h4>React Js</h4>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default Skills