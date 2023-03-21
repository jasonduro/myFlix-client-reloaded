// This is the main view of the app, which will be rendered by the main component (index.jsx). It will display a list of movies. When a user clicks on a movie, the app will display information about that movie, and a button that will return the user to the main view. This component will be a "smart" component because it will maintain state, in this case the list of movies and the selected movie.

import React from "react";
import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import { ProfileView } from "../profile-view/profile-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar";

const MainView = () => {
	const storedUser = localStorage.getItem("user");
	const storedToken = localStorage.getItem("token");
	const [movies, setMovies] = useState([]);
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(null);

	useEffect(() => {
		if (!token) return;
		fetch("https://myflix-app-jl.herokuapp.com/movies", {
			headers: { Authorization: `Bearer ${token}` },
		})
			.then((response) => response.json())
			.then((data) => setMovies(data));
	}, [token]);

	return (
		<BrowserRouter>
			<NavigationBar
				user={user}
				onLoggedOut={() => {
					setUser(null);
					setToken(null);
					localStorage.clear();
				}}
			/>
			<Row className='justify-content-md-center'>
				<Routes>
					<Route
						path='/signup'
						element={
							<>
								{user ? (
									<Navigate to='/' />
								) : (
									<Col xs={12} md={6}>
										<SignupView />
									</Col>
								)}
							</>
						}
					/>

					<Route
						path='/login'
						element={
							<>
								{user ? (
									<Navigate to='/' />
								) : (
									<Col xs={12} md={6}>
										<LoginView
											onLoggedIn={(user, token) => {
												setUser(user);
												setToken(token);
											}}
										/>
									</Col>
								)}
							</>
						}
					/>

					<Route
						path='/movies/:movieId'
						element={
							<>
								{!user ? (
									<Navigate to='/login' replace />
								) : movies.length === 0 ? (
									<Col>The list is empty!</Col>
								) : (
									<Col xs={12} style={{ border: "1px solid black" }}>
										<MovieView movies={movies} user={user} token={token} />
									</Col>
								)}
							</>
						}
					/>

					<Route
						path='/'
						element={
							<>
								{!user ? (
									<Navigate to='/login' replace />
								) : movies.length === 0 ? (
									<Col>The list is empty!</Col>
								) : (
									<>
										{movies.map((movie) => (
											<Col
												className='mb-4'
												key={movie._id}
												xs={12}
												sm={6}
												md={4}
												lg={3}
											>
												<MovieCard movie={movie} user={user} token={token} />
											</Col>
										))}
									</>
								)}
							</>
						}
					/>
					<Route
						path='/profile'
						element={
							<>
								{!user ? (
									<Navigate to='/login' replace />
								) : (
									<ProfileView user={user} movies={movies} token={token} />
								)}
							</>
						}
					/>
				</Routes>
			</Row>
		</BrowserRouter>
	);
};

export default MainView;
