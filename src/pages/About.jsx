import React from 'react'
import './about.css'
const About = () => {
  return (
    <section id="banner">
    <div className="container">
        <div className="banner_wrapper">
            <div className="banner_content">
                <h1>Professional task manager tool to grow</h1>
                <p className="peragraph_effect">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.</p>
                <form action="" method="">
                    <input type="search" placeholder="Join with us using with gmail address"/>
                    <button className="common_btn" type="submit">sing up</button>
                </form>
            </div>
            <div className="banner_img">
                <img src="./images/Banner Shape.png" alt="Not_found"/>
            </div>
        </div>
    </div>

</section>
  )
}

export default About