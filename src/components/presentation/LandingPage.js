import resume from '../../static/images/resume.webp'
function LandingPage() {
	return (
		<div className="landing-page">
			<h2>Create a resume that stands out</h2>
            <h3>Create a Resume that perfactally describes your skills and match job profile</h3>

            <button className="create-resume">Get Started for Free</button>
            <br></br>
            <img className='resume-sample' src={resume} alt=""/>
		</div>
	);
}

export default LandingPage;