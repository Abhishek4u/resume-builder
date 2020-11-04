import React from 'react'
import img2 from "../../static/images/res2.png"

function Education() {
    return (
        <div className="contact flex-row">
            <div className="fill-contact">
                <h2>Education Section</h2>

                <form>

                    <div>
                        <span className="form-left">College Name</span><input type="text" name="" />
                        <span>Degree</span><input type="text" name="" />
                    </div>

                    <div>
                        <span className="form-left">CGPA</span><input type="text" name="" />
                        <span>City/State</span><input type="text" name="" />
                        </div>

                    <div>
                        <span className="form-left">Graduation Month</span><input type="text" name="" />
                        <span>Graduation Year</span><input type="text" name="" />
                    </div>
                </form>

                <button className="btn">Next</button>
                <br/>

                <a href="" className="go-back">Back</a>
            </div>

            <div className="show-contact">
            <img src={img2} alt="" className = "template-images" />
            </div>
        </div>
    )
}

export default Education
