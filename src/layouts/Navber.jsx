import React from 'react'
import './navber.css'
import { Link,NavLink } from 'react-router-dom'

const Navber = () => {
  return (
   
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    <img src="./images/Logo.png" alt="Not found"/>
                </div>
                <div className="menu">
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="service">Service</NavLink>
                        </li>
                        <li>
                            <NavLink to="portfolio">Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="price">Price</NavLink>
                        </li>
                        <li>
                            <NavLink to="blogs">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="counter">Counter</NavLink>
                        </li>
                        <li>
                            <NavLink to="team">Team</NavLink>
                        </li>
                        <li>
                            <NavLink to="news">News</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="nav_btn">
                    <a className="common_btn" href="#">contact us</a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navber
