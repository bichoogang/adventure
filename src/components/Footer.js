import React from 'react'
import { AiFillFacebook ,AiFillInstagram} from "react-icons/ai";
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <div className="container">
                <div className="row footermain">
                    <div className="col-md-6 col-12 fleft">
                        <h1>TreckPlanner</h1>
                        <p>I'm a paragraph. Click here to add your own text and<br /> edit me. Let your users get to know you.</p>


                    </div>
                    <div className="col-md-6 col-12 fright ">
                        <div className="row">
                            <div className="col-md-6 col-12 fright1 p-0 m-0">
                                <ol className="m-0 p-0">
                                    <li><NavLink exact to="/">HOME</NavLink></li>
                                    <li><NavLink exact to="/about">ABOUT</NavLink></li>
                                    <li><NavLink exact to="/tour">TOUR</NavLink></li>
                                    <li><NavLink exact to="/contact">CONTACT</NavLink></li>
                                </ol>

                            </div>
                            <div className="col-md-6 col-12 fright2 ">
                                <ol className="m-0 p-0">
                                    <li><AiFillFacebook/></li>
                                    <li><AiFillInstagram/></li>
                                    
                                </ol>
                                

                            </div>
                            <button>Book Now</button>
                        </div>


                    </div>
                </div>
                <div className="footerb m-0 mt-3 p-0">
                    <p>TreckPlanner 2021. All Rights Reserved.Terms of Use and Privacy Policy</p>
                </div>
            </div>

        </div>
    )
}

export default Footer
