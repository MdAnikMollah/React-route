import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './home.css'

const Home = () => {
  return (
    <section id="plan">
    <div className="container">
        <div className="plan_heading">
            <h3 className="section_heading">Build the right plan for your team.</h3>
            <div className="plan_swap">
                <h4 className="swap_item">monthly</h4>
                <div className="swap_btn"></div>
                <h4 className="swap_item">yearly</h4>
            </div>
        </div>
        <div className="plan_wrapper">
            <div className="plan_item">
                <h4 className="package">pro</h4>
                <div className="package_details">
                    <ul className="package_name">
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                    </ul>
                    <ul className="package_value">
                        <li>900GB</li>
                        <li>Unlimited</li>
                        <li>Available</li>
                        <li>Available</li>
                        <li>Available</li>
                    </ul>
                </div>
                <a className="common_btn" href="#">Get started</a>
            </div>
            <div className="plan_item">
                <h4 className="package">pro</h4>
                <div className="package_details">
                    <ul className="package_name">
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                    </ul>
                    <ul className="package_value">
                        <li>900GB</li>
                        <li>Unlimited</li>
                        <li>Available</li>
                        <li>Available</li>
                        <li>Available</li>
                    </ul>
                </div>
                <a className="common_btn" href="#">Get started</a>
            </div>
            <div className="plan_item">
                <h4 className="package">pro</h4>
                <div className="package_details">
                    <ul className="package_name">
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                        <li><i className="fa-regular fa-square-check"></i><span>Hosting Space</span></li>
                    </ul>
                    <ul className="package_value">
                        <li>900GB</li>
                        <li>Unlimited</li>
                        <li>Available</li>
                        <li>Available</li>
                        <li>Available</li>
                    </ul>
                </div>
                <a className="common_btn" href="#">Get started</a>
            </div>
        </div>
    </div>

</section>
    
    

 
  )
}

export default Home