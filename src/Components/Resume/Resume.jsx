import React from 'react'
import './Resume.css'
import { FaGraduationCap } from "react-icons/fa";
import { FaRecordVinyl } from "react-icons/fa";



const Resume = () => {
    return (
        <>
            <div className="resume-main container">
                <div className="experience">
                    <h2><FaRecordVinyl /> My Experience</h2>
                    <div className='experience-item'>
                        <h3>Present</h3>
                        <h2>Trainee At Careerpedia</h2>
                        <p>Telangana, Hyderabad</p>
                    </div>
                    <div className='experience-item'>
                        <h3>2023</h3>
                        <h2>Running a Blog</h2>
                        <p>Runing an cricket blog on wordpress</p>
                    </div>
                </div>

                <div className="education">
                    <h2> <FaGraduationCap /> My Education</h2>
                    <div className='education-item'>
                        <h3>2020</h3>
                        <h2>B-Tech</h2>
                        <p>Jawaharlal Nehru Technological University Kakinada</p>
                    </div>
                    <div className='education-item'>
                        <h3>2017</h3>
                        <h2>Diplomo</h2>
                        <p>state board of technical education and training</p>
                    </div>
                    <div className='education-item'>
                        {/* <h3>2014</h3> */}
                        <h2>SSC</h2>
                        <p>AP Secondary School Certificate (SSC) Board</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume