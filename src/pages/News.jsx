import React from 'react'
import './news.css'

const News = () => {
  return (
    <section id="newsletter">
        <div className="container">
            <div className="newsletter_heading">
                <h3 className="section_heading">Ready to get started? Start your free trial.</h3>
                <div className="offer">
                <span>Free 30 days trial </span>
                <span>Exclusive Support</span>
                <span>No Fees</span>
               </div> 

            </div>
            <form className="newsletter_form">
                <input type="text" placeholder="Enter Your Email"/>
                <button type="submit"  className="common_btn">Try for free</button>
                
            </form>
        </div>

    </section>
  )
}

export default News