import React from 'react'
import './footers.css'

const Footers = () => {
  return (
   <footer>
      <section id="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_details">
                    <picture>
                        <img src="./images/Logo.png" alt="Not Found"/>
                    </picture>
                    <article>
                        <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page.</p>
                    </article>
                </div>
                <div className="footer_list_wrapper">
                    <div className="footer_features">
                        <h3 className="footer_heading">features</h3>
                        <ul className="footer_list">
                            <li>Home</li>
                            <li>About</li>
                            <li>Benefit</li>
                            <li>Pricing</li>
                            <li>blog</li>
                        </ul>
                    </div>
                    <div className="footer_products">
                        <h3 className="footer_heading">products</h3>
                        <ul className="footer_list">
                            <li>Task Management</li>
                            <li>Company growth</li>
                            <li>Time tracking</li>
                            
                        </ul>
                    </div>
                    <div className="footer_supports">
                        <h3 className="footer_heading">supports</h3>
                        <ul className="footer_list">
                            <li>Customer service</li>
                            <li>Accessibility</li>
                            <li>Contact us</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <div className="right">
                    <p>@20201 Innovate.All rights reserved.</p>
                </div>
                <div className="polecy">
                    <p>Privacy policy</p>
                    <p>Terms & condition</p>
                </div>
            </div>
        </div>
      </section>
   </footer>
  )
}

export default Footers