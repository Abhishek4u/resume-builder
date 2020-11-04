import './static/scss/site.scss'
import Header from './components/presentation/Header'
import LandingPage from './components/presentation/LandingPage'
import GettingStarted from './components/presentation/GettingStarted'
import Contact from './components/presentation/Contact'
import Education from './components/presentation/Education'
function App() {
	return (
		<div className="App">
			<Header></Header>
			
			<div className="content-div">
				{/* <LandingPage></LandingPage> */}
				{/* <GettingStarted></GettingStarted> */}
				<Contact></Contact>
				{/* <Education></Education> */}
			</div>
		</div>
	);
}

export default App;
