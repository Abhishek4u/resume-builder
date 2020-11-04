import React from 'react'
import img1 from '../../static/images/res1.jpg'
import img2 from "../../static/images/res2.png"
import img3 from "../../static/images/res3.jpg"
import img4 from "../../static/images/res4.png"

function GettingStarted() {
    return (
        <div className="getting-started">
            <h1>Select a resume template to get started</h1> 
            <h3>You'll be able to edit and change this template later!</h3>

            <div className="resume-templates flex-row">
                <img src={img1} alt="" className = "template-images" />
                <button className="template-button btn">USE TEMPLATE</button>
                
                <img src={img2} alt="" className = "template-images" />
                <button className="template-button btn">USE TEMPLATE</button>
                
                <img src={img3} alt="" className = "template-images" />
                <button className="template-button btn">USE TEMPLATE</button>
                
                <img src={img4} alt="" className = "template-images" />
                <button className="template-button btn">USE TEMPLATE</button>
            </div>
        </div>
    )
}
export default GettingStarted