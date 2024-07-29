import React from 'react'
import "./Contact.css"

const Contact = () => {
    return (
        <>
            <div className="contact-form">
                <div className='form-heading'>
                    <h2>Let’s work together!</h2>
                    <p>I design and code beautifully simple things and i love what i do. <br /> Just simple like that!</p>
                </div>
                <div className="form">
                    <form action="#">
                        <div className="name">
                            <input placeholder='First Name' type="text" name="" id="" />
                            <input placeholder='Lats Name' type="text" name="" id="" />
                        </div>
                        <div className="email-div">
                            <input placeholder='Email' type="email" name="" id="" />
                            <input placeholder='Phone Number' type="phone" name="" id="" />
                        </div>
                        <div className="options">
                            <select name="options" id="">
                                <option value="">please choose an option</option>
                                <option value="">Websitw developement</option>
                                <option value="">Mobile App developement</option>
                                <option value="">Digital marketing</option>
                            </select>
                        </div>
                        <div className="masseg">
                           <textarea placeholder='Message' name="" id="" rows="7"></textarea>
                        </div>
                        <div className="submit">
                            <button className='form-submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact