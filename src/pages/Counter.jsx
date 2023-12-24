import React from 'react'
import './counter.css'

const Counter = () => {
  return (
    <section id="counter">
        <div className="container">
            <div className="counter_main">
                <div className="counter_icon">
                    <div className="counter_play_btn">
                        <i className="fa-solid fa-play"></i>
                    </div>
                    <h4>Watch a demo</h4>
                </div>
                <div className="counter_wrapper">
                    <div className="counter_item">
                        <h3>2.8<span>x</span></h3>
                        <p>We are ultra faste deal service</p>
                    </div>
                    <div className="counter_item">
                        <h3>68<span>%</span></h3>
                        <p>We are ultra faste deal service</p>
                    </div>
                    <div className="counter_item">
                        <h3>2.4<span>x</span></h3>
                        <p>We are ultra faste deal service</p>
                    </div>
                </div>
            </div>

        </div>
    </section>
      
  )
}

export default Counter