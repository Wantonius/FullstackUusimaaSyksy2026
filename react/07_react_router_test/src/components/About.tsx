import {useNavigate} from 'react-router';

const About = () => {
	
	const navigate = useNavigate();
	
	return(
		<>
			<h2>We test the basic functions of React Router</h2>
			<button onClick={() => navigate("/secret")}>Go to secret page</button>
		</>
	)
}

export default About;