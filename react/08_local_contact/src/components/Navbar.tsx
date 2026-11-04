import {Link} from 'react-router';

const Navbar = () => {
	
	return(
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<a className="navbar-brand" style={{marginLeft:10}}>Contacts</a>
			<ul className="navbar-nav">
				<li className="nav-item" style={{marginLeft:10}}>
					<Link className="nav-link" to="/">Contact List</Link>
				</li>
				<li className="nav-item" style={{marginLeft:10}}>
					<Link className="nav-link" to="/form">Add new contact</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar;