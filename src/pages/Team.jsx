import React from 'react'
import './team.css'

const Team = () => {
  return (
    <section id="team">
        <div className="container">
            <div className="team_heading">
                <h3 className="section_heading">Build the right plan for your team.</h3>
            </div>
            <div className="team_wrapper">
                <div className="team_img">
                    <img src="./images/team_img.jpg" alt="Not_Found"/>

                </div>
                <div className="team_details">
                    <p>As a leading digital platform in Paris, we look to engage with our clients beyond the conventional design and development agency relationship, becoming a partner to the people and companies we work with.</p>
                    <h3>Mohammad Anik Mollah</h3>
                    <div className="team_social">
                        <div className="team_social_item">
                            <i className="fa-brands fa-facebook-f"></i>

                        </div>
                        <div className="team_social_item">
                            <i className="fa-brands fa-facebook-f"></i>

                        </div>
                        <div className="team_social_item">
                            <i className="fa-brands fa-facebook-f"></i>

                        </div>
                    </div>
                    <div className="team_nevigetor">
                        <div className="previous">
                            <i className="fa-solid fa-angle-left"></i>
                        </div>
                        <div className="next">
                            <i className="fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
                <div className="team_shape">
                    <img src="./images/team_shape.png" alt=""/>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Team