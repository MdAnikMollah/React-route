import React from 'react'
import './service.css'

const Service = () => {
  return (
    <section id="list">
    <div className="container">
        <div className="list_btn_wrapper">
            <button className="list_btn_item active">Artificial Intelligence</button>
            <button className="list_btn_item">Header Builder</button>
            <button className="list_btn_item">Safe and Private</button>
            <button className="list_btn_item">Mobility Solutions</button>

        </div>
        <div className="list_wrapper">
            <div className="list_img">
            <img src="./images/list.png" alt="Not_Found"/>
            </div>
            <div className="list_content">
                <h3 className="section_heading">No more messy distribution lists.</h3>
                <p>Install any demo or template with a single click. You can mix and match all the demos & templates. Every demo can be turned into one or multi-page. You can also use the shop features for all demos.</p>
                <a className="common_btn" href="#">Get started</a>
            </div>
        </div>
    </div>
</section>
  )
}

export default Service