import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MoviesFilter } from "../MoviesFilter/movies-filter";

import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../../redux/reducers/user";
import { setToken } from "../../redux/reducers/token";

export const NavigationBar = () => {
	const user = useSelector((state) => state.user.user);
	const dispatch = useDispatch();

	const onLoggedOut = () => {
		dispatch(setUser(null));
		dispatch(setToken(null));
		localStorage.clear();
	};

	return (
		<Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
			<Container>
				<Navbar.Brand as={Link} to='/'>
					myFlix
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='me-auto'>
						{!user && (
							<>
								<Nav.Link as={Link} to='/login'>
									Login
								</Nav.Link>
								<Nav.Link as={Link} to='/signup'>
									Sign Up
								</Nav.Link>
							</>
						)}
						{user && (
							<>
								<Nav.Link as={Link} to='/'>
									Home
								</Nav.Link>
								<Nav.Link as={Link} to='/Profile'>
									Profile
								</Nav.Link>
								<MoviesFilter />
								<Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
							</>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
