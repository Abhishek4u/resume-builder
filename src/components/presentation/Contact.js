import img4 from "../../static/images/res4.png"

function Contact() {
    return (
        <div className="contact flex-row">
            <div className="fill-contact">
                <h2>Personal Details</h2>

                <form>
                    <div><div>
                        <span className="form-left">First Name</span><input type="text" name="first_name" />
                        <span>Last Name</span><input type="text" name="last_name" />
                    </div></div>

                    <div>
                        <span className="form-left">Professional Summary</span>
                        <input type="text" name="summary" className = "p-summary"/>
                    </div>

                    <div>
                        <span className="form-left">Email</span><input type="text" name="" />
                        <span>Phone</span><input type="text" name="" />
                    </div>

                    <div>
                        <span className="form-left">Profession</span><input type="text" name="" />
                        <span>Street</span><input type="text" name="" />
                        </div>

                    <div>
                        <span className="form-left">City</span><input type="text" name="" />
                        <span>State</span><input type="text" name="" />
                    </div>

                    <div>
                        <span className="form-left">Country</span><input type="text" name="" />
                        <span>Pin Code</span><input type="text" name="" />
                    </div>
                </form>

                <button className="btn">Next</button>
                <br />
                <a href="" className="go-back">Back</a>
            </div>

            <div className="show-contact">
                <img src={img4} alt="" className="template-images" />
            </div>
        </div>
    )
}

export default Contact
