import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import $ from 'jquery'
import { NavLink} from 'react-router-dom'


function Navbar() {
    const [change, setchange] = useState(true)

    useEffect(() => {
        $('.mbtn').click(function () {
            $('.right_nav').addClass('cmenu')
            $('.mbtn').addClass('mbtn2')
        })
        $('.xbtm').click(function () {
            $('.right_nav').removeClass('cmenu')
            $('.mbtn').addClass('mbtn2')
        })
        $('ul li').click(function () {
            $('.right_nav').removeClass('cmenu')

        })
    }, [])






    console.log("kk", change)
    return (
        <nav>
            <div className={change ? "nav shadow navbar fixed-top act" : "nav  navbar fixed-top"}>
                <div className="navbarr">

                    <div className="left_nav">
                        <NavLink exact to="/">TreckPlanner
                            
                        </NavLink>
                    </div>



                    <div className="right_nav ">

                        <div className="snav">
                            <ul className="p-0 m-0 pt-md-0 pt-5">
                                <li className="homee active"><NavLink activeClassName="navactive" exact to="/">Home</NavLink></li>
                                <li className="aboutt"><NavLink activeClassName="navactive" exact to="/about">About</NavLink></li>
                                <li className="serv"><NavLink  activeClassName="navactive" exact to="/tour">Tour</NavLink></li>
                                <li className="serv"><NavLink activeClassName="navactive" exact to="/contact">Contact</NavLink></li>
                                
                            </ul>
                        </div>




                        <div className="menu">
                            <FiMenu className="mbtn" />
                            <FiX style={{ color: "red" }} className="xbtm" />
                        </div>

                    </div>
                </div>

            </div>

        </nav>

    )
}


export default Navbar
